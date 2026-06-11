import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Card from '../src/components/Card'

describe('Card component', () => {
  it('should render nothing when no property is provided', () => {
    render(<Card />)
    expect(screen.queryByRole('link')).toBeNull()
  })

  it('should render image, title, location and link when property is complete', () => {
    render(
      <MemoryRouter>
        <Card property={{ id: '123', title: 'Appartement cosy', cover: 'cover.jpg', location: 'Lyon' }} />
      </MemoryRouter>
    )

    expect(screen.getByRole('link')).toHaveAttribute('href', '/logement/123')
    expect(screen.getByRole('img', { name: 'Appartement cosy' })).toHaveAttribute('src', 'cover.jpg')
    expect(screen.getByText('Appartement cosy')).toBeInTheDocument()
    expect(screen.getByText('Lyon')).toBeInTheDocument()
  })

  it('should render a placeholder when cover image is missing', () => {
    const { container } = render(
      <MemoryRouter>
        <Card property={{ id: '456', title: 'Studio sans photo', location: 'Paris' }} />
      </MemoryRouter>
    )

    expect(screen.getByRole('link')).toHaveAttribute('href', '/logement/456')
    expect(screen.queryByRole('img')).toBeNull()
    expect(screen.getByText('Studio sans photo')).toBeInTheDocument()
    expect(screen.getByText('Paris')).toBeInTheDocument()
    expect(container.querySelector('.card-cover.placeholder')).not.toBeNull()
  })

  it('should not render location when location is missing', () => {
    render(
      <MemoryRouter>
        <Card property={{ id: '789', title: 'Studio sans localisation', cover: 'cover2.jpg' }} />
      </MemoryRouter>
    )

    expect(screen.queryByText('Studio sans localisation')).toBeInTheDocument()
    expect(screen.queryByText('Lyon')).toBeNull()
    expect(screen.queryByText('Paris')).toBeNull()
  })
})
