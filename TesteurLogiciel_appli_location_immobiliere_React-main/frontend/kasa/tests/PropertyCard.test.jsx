import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PropertyCard from '../src/components/PropertyCard'

describe('PropertyCard component (presentational, no state)', () => {
  // ========== Test 1: Rendu initial avec props complètes ==========
  it('should render with correct structure when all props are provided', () => {
    render(
      <MemoryRouter>
        <PropertyCard id="123" title="Cosy Apartment" cover="https://example.com/image.jpg" />
      </MemoryRouter>
    )

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/logement/123')
    expect(link).toHaveClass('property-card')

    const title = screen.getByText('Cosy Apartment')
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('property-card__title')
  })

  // ========== Test 2: Vérification du style backgroundImage ==========
  it('should set background image with correct cover URL', () => {
    const coverUrl = 'https://example.com/cover-image.jpg'
    const { container } = render(
      <MemoryRouter>
        <PropertyCard id="456" title="Test Property" cover={coverUrl} />
      </MemoryRouter>
    )

    const bgElement = container.querySelector('.property-card__bg')
    expect(bgElement).toHaveStyle(`backgroundImage: url(${coverUrl})`)
  })

  // ========== Test 3: Vérification des classes CSS appliquées ==========
  it('should have correct CSS classes structure', () => {
    const { container } = render(
      <MemoryRouter>
        <PropertyCard id="789" title="Test Apt" cover="test.jpg" />
      </MemoryRouter>
    )

    expect(container.querySelector('.property-card')).toBeInTheDocument()
    expect(container.querySelector('.property-card__bg')).toBeInTheDocument()
    expect(container.querySelector('.property-card__overlay')).toBeInTheDocument()
    expect(container.querySelector('.property-card__title')).toBeInTheDocument()
  })

  // ========== Test 4: Titre vide ou whitespace ==========
  it('should render with empty title string', () => {
    render(
      <MemoryRouter>
        <PropertyCard id="empty-title" title="" cover="image.jpg" />
      </MemoryRouter>
    )

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/logement/empty-title')
    expect(link).toBeInTheDocument()
  })

  // ========== Test 5: Titre avec caractères spéciaux ==========
  it('should render with special characters in title', () => {
    render(
      <MemoryRouter>
        <PropertyCard id="special" title="Appart' à Paris-10è & chauffé" cover="image.jpg" />
      </MemoryRouter>
    )

    expect(screen.getByText("Appart' à Paris-10è & chauffé")).toBeInTheDocument()
  })

  // ========== Test 6: ID avec différents formats ==========
  it('should correctly format id in link href for various id formats', () => {
    const { rerender } = render(
      <MemoryRouter>
        <PropertyCard id="abc123" title="Test" cover="image.jpg" />
      </MemoryRouter>
    )

    expect(screen.getByRole('link')).toHaveAttribute('href', '/logement/abc123')

    rerender(
      <MemoryRouter>
        <PropertyCard id="id-with-dashes" title="Test" cover="image.jpg" />
      </MemoryRouter>
    )

    expect(screen.getByRole('link')).toHaveAttribute('href', '/logement/id-with-dashes')
  })

  // ========== Test 7: Cover URL vide ==========
  it('should render with empty cover URL', () => {
    const { container } = render(
      <MemoryRouter>
        <PropertyCard id="no-cover" title="Property without image" cover="" />
      </MemoryRouter>
    )

    const bgElement = container.querySelector('.property-card__bg')
    expect(bgElement).toHaveStyle('backgroundImage: url()')
  })

  // ========== Test 8: Cover URL avec caractères spéciaux ==========
  it('should render with complex cover URL containing special characters', () => {
    const coverUrl = 'https://example.com/images/image-2025_test?size=large&format=webp'
    const { container } = render(
      <MemoryRouter>
        <PropertyCard id="complex-url" title="Property" cover={coverUrl} />
      </MemoryRouter>
    )

    const bgElement = container.querySelector('.property-card__bg')
    expect(bgElement).toHaveStyle(`backgroundImage: url(${coverUrl})`)
  })

  // ========== Test 9: Vérification que le composant retourne un lien (navigable) ==========
  it('should render as a navigable link element', () => {
    const { container } = render(
      <MemoryRouter>
        <PropertyCard id="nav-test" title="Navigable" cover="img.jpg" />
      </MemoryRouter>
    )

    const link = container.querySelector('a.property-card')
    expect(link).toBeInTheDocument()
    expect(link?.tagName).toBe('A')
  })

  // ========== Test 10: Vérification de tous les éléments enfants du card ==========
  it('should contain all expected child elements in correct order', () => {
    const { container } = render(
      <MemoryRouter>
        <PropertyCard id="full-test" title="Full Test" cover="full.jpg" />
      </MemoryRouter>
    )

    const propertyCard = container.querySelector('.property-card')
    const children = propertyCard?.children

    expect(children?.length).toBe(3) // bg, overlay, title
    expect(children?.[0]).toHaveClass('property-card__bg')
    expect(children?.[1]).toHaveClass('property-card__overlay')
    expect(children?.[2]).toHaveClass('property-card__title')
  })

  // ========== Test 11: Props manquantes (edge case) ==========
  it('should handle undefined props gracefully', () => {
    render(
      <MemoryRouter>
        <PropertyCard id={undefined} title={undefined} cover={undefined} />
      </MemoryRouter>
    )

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
  })

  // ========== Test 12: Longue chaîne de titre ==========
  it('should render with very long title string', () => {
    const longTitle = 'A'.repeat(200)
    render(
      <MemoryRouter>
        <PropertyCard id="long-title" title={longTitle} cover="image.jpg" />
      </MemoryRouter>
    )

    expect(screen.getByText(longTitle)).toBeInTheDocument()
  })
})
