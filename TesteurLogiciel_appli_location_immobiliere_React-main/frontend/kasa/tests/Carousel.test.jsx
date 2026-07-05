import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Carousel from '../src/components/Carousel'

describe('Carousel component (with state)', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']

  it('should render nothing when the images list is empty', () => {
    render(<Carousel images={[]} alt="aucune image" />)
    expect(screen.queryByRole('img')).toBeNull()
  })

  // ========== Test 2: Rendu initial avec plusieurs images ==========
  it('should render the first image and navigation buttons for multiple images', async () => {
    render(<Carousel images={images} alt="logement" />)

    expect(screen.getByRole('img', { name: 'logement' })).toHaveAttribute('src', 'image1.jpg')
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
    expect(screen.getByLabelText('Image précédente')).toBeInTheDocument()
    expect(screen.getByLabelText('Image suivante')).toBeInTheDocument()

    const user = userEvent.setup()
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByRole('img', { name: 'logement' })).toHaveAttribute('src', 'image2.jpg')
    expect(screen.getByText('2 / 3')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Image précédente'))
    expect(screen.getByRole('img', { name: 'logement' })).toHaveAttribute('src', 'image1.jpg')
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  // ========== Test 3: Navigation clavier ==========
  it('should navigate with keyboard ArrowLeft and ArrowRight keys', () => {
    render(<Carousel images={images} alt="logement" />)

    fireEvent.keyDown(window, { key: 'ArrowRight' })
    expect(screen.getByRole('img', { name: 'logement' })).toHaveAttribute('src', 'image2.jpg')
    expect(screen.getByText('2 / 3')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'ArrowLeft' })
    expect(screen.getByRole('img', { name: 'logement' })).toHaveAttribute('src', 'image1.jpg')
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  // ========== Test 4: Une seule image - pas de boutons ==========
  it('should hide buttons when only one image is provided', () => {
    render(<Carousel images={['single.jpg']} alt="seule image" />)

    expect(screen.getByRole('img', { name: 'seule image' })).toHaveAttribute('src', 'single.jpg')
    expect(screen.queryByLabelText('Image précédente')).toBeNull()
    expect(screen.queryByLabelText('Image suivante')).toBeNull()
    expect(screen.getByText('1 / 1')).toBeInTheDocument()
  })

  // ========== Test 5: Navigation circulaire - suivant de la dernière image ==========
  it('should wrap to first image when navigating next from last image', async () => {
    render(<Carousel images={images} alt="logement" />)

    // Aller à la dernière image
    const user = userEvent.setup()
    await user.click(screen.getByLabelText('Image suivante'))
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image3.jpg')

    // Continuer (doit revenir à la première)
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image1.jpg')
  })

  // ========== Test 6: Navigation circulaire - précédent de la première image ==========
  it('should wrap to last image when navigating prev from first image', async () => {
    render(<Carousel images={images} alt="logement" />)

    const user = userEvent.setup()
    // Cliquer sur précédent depuis la première image
    await user.click(screen.getByLabelText('Image précédente'))
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image3.jpg')
  })

  // ========== Test 7: Clavier ignore les flèches si une seule image ==========
  it('should not respond to keyboard navigation when only one image', () => {
    render(<Carousel images={['single.jpg']} alt="seule image" />)

    fireEvent.keyDown(window, { key: 'ArrowRight' })
    expect(screen.getByText('1 / 1')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'single.jpg')

    fireEvent.keyDown(window, { key: 'ArrowLeft' })
    expect(screen.getByText('1 / 1')).toBeInTheDocument()
  })

  // ========== Test 8: Autres touches clavier sont ignorées ==========
  it('should ignore other keyboard keys', () => {
    render(<Carousel images={images} alt="logement" />)

    fireEvent.keyDown(window, { key: 'Enter' })
    fireEvent.keyDown(window, { key: 'ArrowUp' })
    fireEvent.keyDown(window, { key: 'Space' })

    expect(screen.getByText('1 / 3')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image1.jpg')
  })

  // ========== Test 9: Changement de images prop réinitialise l'index ==========
  it('should reset to first image when images array changes', async () => {
    const { rerender } = render(<Carousel images={images} alt="logement" />)

    const user = userEvent.setup()
    // Naviguer vers image 2
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByText('2 / 3')).toBeInTheDocument()

    // Changer les images (nouveau tableau)
    const newImages = ['newImage1.jpg', 'newImage2.jpg']
    rerender(<Carousel images={newImages} alt="logement" />)

    // Doit revenir à la première image
    expect(screen.getByText('1 / 2')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'newImage1.jpg')
  })

  // ========== Test 10: Vérification des attributs alt ==========
  it('should set the correct alt attribute on image', () => {
    render(<Carousel images={images} alt="Appartement de luxe" />)

    expect(screen.getByRole('img', { name: 'Appartement de luxe' })).toBeInTheDocument()
  })

  // ========== Test 11: alt par défaut (vide) ==========
  it('should handle empty alt attribute', () => {
    render(<Carousel images={images} />)

    // Une image avec alt="" a un rôle 'presentation' plutôt que 'img'
    const img = screen.getByRole('presentation')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', '')
  })

  // ========== Test 12: Vérification des classes CSS et ARIA labels ==========
  it('should have correct CSS classes and ARIA labels on buttons', () => {
    render(<Carousel images={images} alt="logement" />)

    const prevBtn = screen.getByLabelText('Image précédente')
    const nextBtn = screen.getByLabelText('Image suivante')

    expect(prevBtn).toHaveClass('carousel__btn', 'carousel__btn--left')
    expect(nextBtn).toHaveClass('carousel__btn', 'carousel__btn--right')
  })

  // ========== Test 13: Vérification structure DOM ==========
  it('should have correct structure with carousel container', () => {
    const { container } = render(<Carousel images={images} alt="logement" />)

    expect(container.querySelector('.carousel')).toBeInTheDocument()
    expect(container.querySelector('.carousel__img')).toBeInTheDocument()
    expect(container.querySelector('.carousel__count')).toBeInTheDocument()
  })

  // ========== Test 14: Navigation au clavier avec plusieurs clics ==========
  it('should handle multiple keyboard navigation events', () => {
    render(<Carousel images={images} alt="logement" />)

    // Simuler plusieurs clics rapides de flèche droite
    fireEvent.keyDown(window, { key: 'ArrowRight' })
    fireEvent.keyDown(window, { key: 'ArrowRight' })
    fireEvent.keyDown(window, { key: 'ArrowRight' })
    fireEvent.keyDown(window, { key: 'ArrowRight' }) // Wrapping

    expect(screen.getByText('2 / 3')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image2.jpg')
  })

  // ========== Test 15: Alt avec caractères spéciaux ==========
  it('should handle alt text with special characters', () => {
    render(<Carousel images={images} alt="Appart' à Paris-75 & chauffé" />)

    expect(screen.getByRole('img', { name: "Appart' à Paris-75 & chauffé" })).toBeInTheDocument()
  })

  // ========== Test 16: Props par défaut (images par défaut = []) ==========
  it('should handle undefined images prop (default to empty array)', () => {
    render(<Carousel alt="test" />)

    expect(screen.queryByRole('img')).toBeNull()
  })

  // ========== Test 17: Deux images (navigation circulaire) ==========
  it('should navigate correctly with exactly two images', async () => {
    render(<Carousel images={['img1.jpg', 'img2.jpg']} alt="logement" />)

    const user = userEvent.setup()
    expect(screen.getByText('1 / 2')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByText('2 / 2')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByText('1 / 2')).toBeInTheDocument()
  })

  // ========== Test 18: Compteur d'images correct dans tous les cas ==========
  it('should display correct image counter in all states', async () => {
    render(<Carousel images={images} alt="logement" />)

    const user = userEvent.setup()

    expect(screen.getByText('1 / 3')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Image précédente'))
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
  })
})
