import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Carousel from './Carousel'

describe('Carousel component', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']

  it('should render nothing when the images list is empty', () => {
    render(<Carousel images={[]} alt="aucune image" />)
    expect(screen.queryByRole('img')).toBeNull()
  })

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

  it('should navigate with keyboard ArrowLeft and ArrowRight keys', () => {
    render(<Carousel images={images} alt="logement" />)

    fireEvent.keyDown(window, { key: 'ArrowRight' })
    expect(screen.getByRole('img', { name: 'logement' })).toHaveAttribute('src', 'image2.jpg')
    expect(screen.getByText('2 / 3')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'ArrowLeft' })
    expect(screen.getByRole('img', { name: 'logement' })).toHaveAttribute('src', 'image1.jpg')
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('should hide buttons when only one image is provided', () => {
    render(<Carousel images={['single.jpg']} alt="seule image" />)

    expect(screen.getByRole('img', { name: 'seule image' })).toHaveAttribute('src', 'single.jpg')
    expect(screen.queryByLabelText('Image précédente')).toBeNull()
    expect(screen.queryByLabelText('Image suivante')).toBeNull()
    expect(screen.getByText('1 / 1')).toBeInTheDocument()
  })

  it('should ignore ArrowLeft and ArrowRight keys when there is only one image', () => {
    render(<Carousel images={['single.jpg']} alt="seule image" />)

    fireEvent.keyDown(window, { key: 'ArrowRight' })
    expect(screen.getByRole('img', { name: 'seule image' })).toHaveAttribute('src', 'single.jpg')
    expect(screen.getByText('1 / 1')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'ArrowLeft' })
    expect(screen.getByRole('img', { name: 'seule image' })).toHaveAttribute('src', 'single.jpg')
    expect(screen.getByText('1 / 1')).toBeInTheDocument()
  })

  it('should reset index when the image list changes', async () => {
    const { rerender } = render(<Carousel images={['image1.jpg', 'image2.jpg']} alt="logement" />)

    const user = userEvent.setup()
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByRole('img', { name: 'logement' })).toHaveAttribute('src', 'image2.jpg')

    rerender(<Carousel images={['new1.jpg', 'new2.jpg']} alt="logement" />)
    expect(screen.getByRole('img', { name: 'logement' })).toHaveAttribute('src', 'new1.jpg')
    expect(screen.getByText('1 / 2')).toBeInTheDocument()
  })
})
