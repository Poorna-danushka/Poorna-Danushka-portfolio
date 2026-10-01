# Technical Design Document

## Introduction

This document outlines the technical design for optimizing the Hero section's mobile user experience. The design follows a mobile-first approach, starting from 320px viewport width and progressively enhancing for larger screens while maintaining desktop elegance.

## System Architecture

### Component Hierarchy

```
Hero Section
├── HeroBackdrop (ambient background)
├── Container (responsive wrapper)
└── Content Layout
    ├── ProfileMark (mobile: top, desktop: right)
    ├── Status Badge (availability indicator)
    ├── Main Heading (name + gradient)
    ├── Typewriter Role (animated profession)
    ├── Info Pills (location + education)
    ├── CTA Buttons (stacked mobile, row desktop)
    ├── Resume Link (subtle tertiary action)
    └── Social Links (consistent across all sizes)
```

### Responsive Breakpoint Strategy

#### Mobile-First Breakpoints
- **Base (320px+)**: Core mobile experience, minimal viable layout
- **xs (380px+)**: Enhanced mobile with more breathing room
- **sm (640px+)**: Large mobile/small tablet, transitional layout
- **md (768px+)**: Tablet portrait, enhanced content visibility
- **lg (1024px+)**: Desktop layout with side-by-side content
- **xl (1280px+)**: Enhanced desktop with optimized spacing

## Mobile-First Layout Design

### Visual Hierarchy Priority

1. **Profile Image** (immediate visual impact)
2. **Name with Gradient** (personal branding)
3. **Animated Role** (professional identity)
4. **Primary CTA** (main conversion goal)
5. **Secondary Actions** (supporting conversions)
6. **Trust Signals** (location, education)
7. **Social Links** (connection opportunities)

### Content Flow Optimization

#### Mobile Layout (320px - 767px)
```css
.hero-section {
  /* Vertical stack with optimized spacing */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* 16px base, scales up */
}

.profile-mark {
  /* Compact sizing for mobile viewport */
  max-width: 220px; /* Very small screens */
  max-width: 260px; /* 380px+ */
  max-width: 300px; /* 640px+ */
  order: -1; /* Show first on mobile */
}

.content-section {
  /* Center-aligned for mobile readability */
  text-align: center;
  space-y: 1rem;
}
```

#### Desktop Layout (1024px+)
```css
.hero-section {
  /* Side-by-side layout */
  display: grid;
  grid-template-columns: 7fr 5fr;
  align-items: center;
  gap: 2.5rem;
}

.profile-mark {
  /* Enhanced sizing for desktop */
  max-width: 448px;
  order: 2; /* Right side on desktop */
}

.content-section {
  /* Left-aligned for F-pattern reading */
  text-align: left;
  order: 1;
}
```

## Component Design Specifications

### ProfileMark Component

#### Mobile Optimizations
- **Size Range**: 220px → 260px → 300px (responsive scaling)
- **Decorative Elements**: Hidden on <380px for clean appearance
- **Info Chip**: Repositioned and simplified ("2026 / B.Sc. IT")
- **Glow Effects**: Reduced intensity for performance
- **Touch Interaction**: Maintains tilt effect on touch devices

#### Implementation Strategy
```typescript
// Responsive sizing with progressive enhancement
className={cn(
  'relative mx-auto w-full',
  'max-w-[220px]',           // Base mobile
  'min-[380px]:max-w-[260px]', // Enhanced mobile
  'sm:max-w-sm',             // Large mobile
  'lg:max-w-md',             // Desktop
  'p-1.5 sm:p-2 group cursor-pointer'
)}

// Conditional decorative elements
<div className="hidden min-[380px]:block ...">
  {/* Decorative bracket only on larger screens */}
</div>
```

### Typography System

#### Mobile-First Font Scaling
```css
/* Progressive text scaling */
.main-heading {
  font-size: 2rem;           /* 32px base */
  font-size: 2.25rem;        /* 36px at 350px */
  font-size: 3rem;           /* 48px at 640px */
  font-size: 3.75rem;        /* 60px at 1024px */
  font-size: 4.5rem;         /* 72px at 1280px */
  line-height: 1.1;          /* Tight for impact */
}

.typewriter-role {
  font-size: 1.125rem;       /* 18px base */
  font-size: 1.25rem;        /* 20px at 350px */
  font-size: 1.5rem;         /* 24px at 640px */
  font-size: 1.875rem;       /* 30px at 1024px */
  font-size: 2.25rem;        /* 36px at 1280px */
}
```

#### Readability Optimization
- **Minimum Font Size**: 16px (prevents zoom on iOS)
- **Line Height**: 1.4-1.6 for optimal mobile reading
- **Color Contrast**: WCAG AAA compliant ratios
- **Font Weight**: Strategic bold usage for hierarchy

### Button System Design

#### Touch Target Optimization
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size: 'mobile' | 'desktop'
  fullWidth?: boolean
}

// Mobile-first button sizing
const buttonStyles = {
  mobile: {
    height: '48px',      // WCAG AAA minimum
    padding: '12px 32px', // Adequate touch area
    fontSize: '14px',    // Readable without zoom
    borderRadius: '24px' // Modern mobile aesthetic
  },
  desktop: {
    height: '44px',      // Slightly smaller for desktop
    padding: '12px 28px',
    fontSize: '14px',
    borderRadius: '22px'
  }
}
```

#### Mobile Button Layout Strategy
1. **Stack Vertically**: Full-width buttons on mobile
2. **Primary Emphasis**: Main CTA gets visual priority
3. **Secondary Actions**: Less prominent styling
4. **Tertiary Links**: Subtle ghost style for resume
5. **Adequate Spacing**: 12px minimum between touch targets

### Animation System

#### Performance-First Approach
```typescript
// Conditional animations based on device capability
const useOptimizedAnimations = () => {
  const reduced = usePrefersReducedMotion()
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  return {
    // Disable heavy animations on mobile for performance
    enableTilt: !isMobile && !reduced,
    enableGlow: !isMobile && !reduced,
    enableComplexAnimations: !reduced,
    // Always respect user preferences
    respectReducedMotion: reduced
  }
}
```

#### Mobile Animation Strategy
- **Micro-interactions**: Subtle scale/opacity changes
- **Entry Animations**: Lightweight fade-up effects
- **Typewriter Effect**: Maintained with performance optimization
- **Status Indicator**: Simple pulse animation
- **Reduced Motion**: Complete animation disable option

## Responsive Implementation Strategy

### Breakpoint Management

#### Custom Breakpoint System
```css
/* Extended mobile breakpoints for granular control */
@media (min-width: 320px) { /* Ultra-small mobile */ }
@media (min-width: 380px) { /* Small mobile enhanced */ }
@media (min-width: 475px) { /* Large mobile */ }
@media (min-width: 640px) { /* Tailwind sm */ }
@media (min-width: 768px) { /* Tailwind md */ }
@media (min-width: 1024px) { /* Tailwind lg */ }
```

#### Progressive Enhancement Pattern
```typescript
// Mobile-first utility application
<div className={cn(
  // Base mobile styles (320px+)
  'flex flex-col items-center gap-4 text-center',
  // Enhanced mobile (380px+)
  'min-[380px]:gap-5',
  // Large mobile (640px+) 
  'sm:gap-6',
  // Desktop (1024px+)
  'lg:grid lg:grid-cols-12 lg:items-center lg:text-left'
)}>
```

### Content Prioritization Logic

#### Mobile Content Strategy
1. **Above Fold**: Name, role, primary CTA, profile image
2. **Below Fold**: Secondary actions, social links, scroll indicator
3. **Hidden Content**: Long descriptions, decorative elements
4. **Condensed Info**: Abbreviated location and education

#### Desktop Content Strategy  
1. **Full Content**: All elements visible and enhanced
2. **Side-by-Side**: Traditional F-pattern layout
3. **Enhanced Spacing**: More breathing room and decoration
4. **Full Descriptions**: Complete value proposition text

## Accessibility Design

### WCAG 2.1 AAA Compliance

#### Touch Target Requirements
- **Minimum Size**: 44px × 44px for all interactive elements
- **Spacing**: 8px minimum between adjacent touch targets
- **Visual Feedback**: Clear pressed states and focus indicators
- **Semantic Markup**: Proper ARIA labels and roles

#### Screen Reader Optimization
```typescript
// Comprehensive accessibility attributes
<button
  aria-label="View my projects and portfolio work"
  role="button"
  tabIndex={0}
  onKeyDown={handleKeyPress}
>
  View Projects
</button>

<img
  src={profileImage}
  alt="Professional headshot of Poorna Danushka Jayasundara"
  loading="eager"
  width={960}
  height={1200}
/>
```

#### Focus Management
- **Logical Tab Order**: Sequential navigation flow
- **Visible Focus**: High contrast focus indicators
- **Skip Links**: Optional navigation shortcuts
- **Keyboard Navigation**: Full functionality without mouse

### Color and Contrast

#### Color System Design
```css
/* High contrast color palette */
:root {
  --text-primary: #0f172a;      /* 21:1 contrast ratio */
  --text-secondary: #475569;    /* 7:1 contrast ratio */
  --accent-color: #4f46e5;      /* 4.5:1+ on white */
  --accent-contrast: #ffffff;   /* High contrast pairing */
}

.dark {
  --text-primary: #f8fafc;      /* 21:1 contrast ratio */
  --text-secondary: #94a3b8;    /* 7:1 contrast ratio */
  --accent-color: #6366f1;      /* Enhanced for dark mode */
}
```

## Performance Optimization

### Mobile Performance Strategy

#### Code Splitting and Loading
```typescript
// Lazy load non-critical animations
const TiltEffect = lazy(() => import('./TiltEffect'))
const ComplexAnimations = lazy(() => import('./ComplexAnimations'))

// Conditional loading based on device capability
const ProfileMark = ({ isMobile }: { isMobile: boolean }) => {
  if (isMobile) {
    return <SimplifiedProfile />
  }
  
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <EnhancedProfile />
    </Suspense>
  )
}
```

#### Image Optimization
- **Eager Loading**: Hero image prioritized for LCP
- **Responsive Images**: Multiple sizes via srcSet
- **Modern Formats**: WebP with fallback support
- **Aspect Ratio**: Prevents layout shift during load

#### Animation Performance
```typescript
// GPU-accelerated transforms only
const performantAnimations = {
  transform: 'translate3d(0, 0, 0)', // Hardware acceleration
  willChange: 'transform, opacity',  // Optimize for changes
  backfaceVisibility: 'hidden'       // Prevent flicker
}

// Reduce animations on mobile
const mobileAnimations = {
  scale: reduced ? 1 : isMobile ? 1.02 : 1.05,
  duration: isMobile ? 0.2 : 0.3
}
```

### Bundle Size Optimization
- **Tree Shaking**: Remove unused animation variants
- **Component Lazy Loading**: Load complex components on-demand
- **CSS Purging**: Remove unused Tailwind classes
- **Icon Optimization**: Use optimized SVG components

## Data Models

### Component Props Interface

```typescript
interface HeroSectionProps {
  person: PersonalInfo
  className?: string
  priorityMode?: 'mobile' | 'desktop' | 'balanced'
  animationLevel?: 'minimal' | 'standard' | 'enhanced'
}

interface PersonalInfo {
  name: string
  firstName: string
  professionalTitle: string
  location: string
  university: string
  profileImage: string
  profileImageAlt: string
}

interface ResponsiveBreakpoint {
  name: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  minWidth: number
  description: string
  layoutStrategy: LayoutConfig
}

interface LayoutConfig {
  contentOrder: ('profile' | 'text' | 'actions')[]
  textAlignment: 'left' | 'center' | 'right'
  buttonLayout: 'stacked' | 'inline' | 'grid'
  showDecorations: boolean
  profileSize: 'compact' | 'standard' | 'enhanced'
}
```

### State Management

```typescript
interface HeroState {
  currentBreakpoint: ResponsiveBreakpoint
  isAnimationEnabled: boolean
  isTouchDevice: boolean
  prefersReducedMotion: boolean
  layoutMode: 'mobile' | 'tablet' | 'desktop'
}

// Context for responsive behavior
const useHeroResponsive = (): HeroState => {
  const [state, setState] = useState<HeroState>({
    currentBreakpoint: 'xs',
    isAnimationEnabled: true,
    isTouchDevice: false,
    prefersReducedMotion: false,
    layoutMode: 'mobile'
  })
  
  useEffect(() => {
    const updateResponsiveState = () => {
      setState(prev => ({
        ...prev,
        currentBreakpoint: getCurrentBreakpoint(),
        layoutMode: getLayoutMode(),
        isTouchDevice: 'ontouchstart' in window
      }))
    }
    
    window.addEventListener('resize', updateResponsiveState)
    return () => window.removeEventListener('resize', updateResponsiveState)
  }, [])
  
  return state
}
```

## Property-Based Testing Assessment

### Applicability Analysis

Property-Based Testing (PBT) has limited direct applicability for UI/UX optimization features like mobile hero section improvements. However, certain aspects can benefit from property-based approaches:

#### Suitable for PBT

1. **Responsive Breakpoint Logic**
   ```typescript
   // Property: Breakpoint detection should be consistent and deterministic
   property("breakpoint detection is monotonic", (windowWidth: number) => {
     const breakpoint = getCurrentBreakpoint(windowWidth)
     const nextBreakpoint = getCurrentBreakpoint(windowWidth + 1)
     // Property: Breakpoint should never decrease when width increases
     return getBreakpointIndex(breakpoint) <= getBreakpointIndex(nextBreakpoint)
   })
   ```

2. **Typography Scaling Relationships**
   ```typescript
   // Property: Font sizes should scale proportionally across breakpoints
   property("font sizes maintain hierarchy", (breakpoint: Breakpoint) => {
     const headingSize = getHeadingSize(breakpoint)
     const bodySize = getBodySize(breakpoint)
     // Property: Heading should always be larger than body text
     return headingSize > bodySize
   })
   ```

3. **Touch Target Calculations**
   ```typescript
   // Property: All touch targets meet accessibility requirements
   property("touch targets meet WCAG guidelines", (element: InteractiveElement) => {
     const dimensions = calculateTouchTarget(element)
     // Property: Touch targets should be at least 44px in both dimensions
     return dimensions.width >= 44 && dimensions.height >= 44
   })
   ```

#### Not Suitable for PBT

1. **Visual Design Aesthetics**: Subjective design decisions cannot be property-tested
2. **Animation Timing**: User experience preferences for animation duration/easing
3. **Color Scheme Selection**: Aesthetic color choices beyond accessibility requirements
4. **Layout Positioning**: Specific spacing and positioning decisions are design choices

### Recommended Testing Approach

#### Integration Tests (Primary)
```typescript
describe('Hero Section Mobile Responsiveness', () => {
  test.each([
    [320, 'xs'],
    [380, 'xs-enhanced'], 
    [640, 'sm'],
    [768, 'md'],
    [1024, 'lg']
  ])('applies correct layout at %dpx width', (width, expectedBreakpoint) => {
    render(<HeroSection />, { viewport: { width } })
    expect(getComputedBreakpoint()).toBe(expectedBreakpoint)
  })
})
```

#### Visual Regression Tests
```typescript
// Chromatic or similar visual testing
test('hero section renders correctly across breakpoints', async () => {
  const breakpoints = [320, 640, 768, 1024, 1280]
  for (const width of breakpoints) {
    await page.setViewportSize({ width, height: 800 })
    await expect(page.locator('[data-testid="hero-section"]')).toHaveScreenshot()
  }
})
```

#### Accessibility Property Tests
```typescript
// Limited PBT for accessibility compliance
property("all interactive elements are keyboard accessible", (interactiveElements) => {
  return interactiveElements.every(element => 
    element.hasAttribute('tabindex') || 
    element.matches('button, a, input, select, textarea')
  )
})
```

### Implementation Strategy

1. **Focus on Integration Testing**: Traditional responsive testing with viewport simulation
2. **Manual Testing Priority**: Real device testing across target mobile devices
3. **Limited PBT Usage**: Apply only to mathematical/logical properties like breakpoint calculations
4. **Visual Regression**: Automated screenshot comparison for layout consistency
5. **Accessibility Automation**: Use axe-core and similar tools for WCAG compliance

### Conclusion

Property-Based Testing should be **minimally applied** to this mobile hero UX optimization. The feature is primarily concerned with visual design, layout aesthetics, and user experience optimization—areas where traditional integration testing, manual testing, and visual regression testing provide more value than property-based approaches.

## Error Handling and Recovery

### Mobile-Specific Error Scenarios

#### Viewport Detection Failures
```typescript
// Fallback for viewport detection issues
const useViewportWithFallback = () => {
  const [viewport, setViewport] = useState({ width: 320, height: 568 })
  
  useEffect(() => {
    try {
      const updateViewport = () => {
        setViewport({
          width: window.innerWidth || 320,
          height: window.innerHeight || 568
        })
      }
      
      updateViewport()
      window.addEventListener('resize', updateViewport)
      return () => window.removeEventListener('resize', updateViewport)
    } catch (error) {
      console.warn('Viewport detection failed, using mobile fallback', error)
      // Graceful degradation to mobile-first layout
      setViewport({ width: 320, height: 568 })
    }
  }, [])
  
  return viewport
}
```

#### Image Loading Failures
```typescript
// Progressive image loading with fallbacks
const ProfileImage = ({ src, alt, ...props }) => {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const [currentSrc, setCurrentSrc] = useState(src)
  
  const handleImageError = () => {
    setImageStatus('error')
    // Fallback to initials-based avatar
    setCurrentSrc(generateInitialsAvatar(alt))
  }
  
  const handleImageLoad = () => {
    setImageStatus('loaded')
  }
  
  return (
    <>
      {imageStatus === 'loading' && (
        <div className="animate-pulse bg-surface rounded-2xl aspect-[4/5]" />
      )}
      <img
        src={currentSrc}
        alt={alt}
        onError={handleImageError}
        onLoad={handleImageLoad}
        className={cn(
          'transition-opacity duration-300',
          imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'
        )}
        {...props}
      />
    </>
  )
}
```

#### Animation Performance Degradation
```typescript
// Performance-aware animation system
const usePerformantAnimations = () => {
  const [performanceMode, setPerformanceMode] = useState<'high' | 'medium' | 'low'>('high')
  
  useEffect(() => {
    // Detect device performance capabilities
    const detectPerformance = () => {
      const connection = (navigator as any).connection
      const memoryGB = (navigator as any).deviceMemory
      const cores = navigator.hardwareConcurrency
      
      // Performance heuristics
      if (connection?.effectiveType === '2g' || memoryGB < 2 || cores < 4) {
        setPerformanceMode('low')
      } else if (connection?.effectiveType === '3g' || memoryGB < 4) {
        setPerformanceMode('medium')
      }
    }
    
    detectPerformance()
  }, [])
  
  return {
    performanceMode,
    enableComplexAnimations: performanceMode === 'high',
    enableMediumAnimations: performanceMode !== 'low',
    animationDuration: performanceMode === 'low' ? 150 : performanceMode === 'medium' ? 250 : 300
  }
}
```

#### Touch Event Handling
```typescript
// Robust touch handling with fallbacks
const useTouchHandling = () => {
  const [touchSupport, setTouchSupport] = useState<'touch' | 'mouse' | 'hybrid'>('mouse')
  
  useEffect(() => {
    const detectTouchSupport = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const hasMouse = matchMedia('(hover: hover) and (pointer: fine)').matches
      
      if (hasTouch && hasMouse) {
        setTouchSupport('hybrid')
      } else if (hasTouch) {
        setTouchSupport('touch')
      } else {
        setTouchSupport('mouse')
      }
    }
    
    detectTouchSupport()
    
    // Re-evaluate on orientation change (mobile)
    window.addEventListener('orientationchange', detectTouchSupport)
    return () => window.removeEventListener('orientationchange', detectTouchSupport)
  }, [])
  
  return { touchSupport }
}
```

### Accessibility Error Recovery

#### Focus Management Errors
```typescript
// Robust focus management
const useFocusManagement = () => {
  const focusRing = useRef<HTMLElement[]>([])
  
  const handleFocusError = (error: Error, element: HTMLElement) => {
    console.warn('Focus management error:', error)
    
    // Fallback to nearest focusable element
    const fallbackElement = findNearestFocusable(element) || document.body
    try {
      fallbackElement.focus()
    } catch (focusError) {
      console.error('Focus fallback failed:', focusError)
    }
  }
  
  return { focusRing: focusRing.current, handleFocusError }
}
```

#### Screen Reader Compatibility
```typescript
// Graceful degradation for screen readers
const useAccessibilityAnnouncements = () => {
  const [announcer, setAnnouncer] = useState<HTMLElement | null>(null)
  
  useEffect(() => {
    try {
      const ariaLiveRegion = document.createElement('div')
      ariaLiveRegion.setAttribute('aria-live', 'polite')
      ariaLiveRegion.setAttribute('aria-atomic', 'true')
      ariaLiveRegion.setAttribute('class', 'sr-only')
      document.body.appendChild(ariaLiveRegion)
      setAnnouncer(ariaLiveRegion)
      
      return () => {
        if (document.body.contains(ariaLiveRegion)) {
          document.body.removeChild(ariaLiveRegion)
        }
      }
    } catch (error) {
      console.warn('Failed to create accessibility announcer:', error)
    }
  }, [])
  
  const announce = (message: string) => {
    if (announcer) {
      announcer.textContent = message
    }
  }
  
  return { announce }
}
```

### Error Boundary Implementation

```typescript
class HeroErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Hero section error:', error, errorInfo)
    
    // Report to error tracking service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: `Hero section error: ${error.message}`,
        fatal: false
      })
    }
  }
  
  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || SimplifiedHero
      return <FallbackComponent />
    }
    
    return this.props.children
  }
}

// Simplified fallback hero component
const SimplifiedHero = () => (
  <section className="min-h-screen flex items-center justify-center p-4">
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-foreground">Poorna Danushka</h1>
      <p className="text-xl text-muted">Full-Stack Developer</p>
      <a 
        href="#projects" 
        className="inline-block px-6 py-3 bg-accent text-accent-fg rounded-full hover:opacity-90 transition"
      >
        View Projects
      </a>
    </div>
  </section>
)
```

## Testing Strategy

### Testing Pyramid for Mobile Hero UX

#### Unit Tests (Base Layer)
```typescript
describe('Responsive Utilities', () => {
  describe('getCurrentBreakpoint', () => {
    test.each([
      [320, 'xs'],
      [640, 'sm'],
      [768, 'md'],
      [1024, 'lg'],
      [1280, 'xl']
    ])('returns %s for %dpx width', (width, expected) => {
      expect(getCurrentBreakpoint(width)).toBe(expected)
    })
  })
  
  describe('calculateTouchTargetSize', () => {
    test('ensures minimum 44px touch targets', () => {
      const element = { width: 32, height: 32 }
      const adjusted = calculateTouchTargetSize(element)
      expect(adjusted.width).toBeGreaterThanOrEqual(44)
      expect(adjusted.height).toBeGreaterThanOrEqual(44)
    })
  })
  
  describe('Typography scaling', () => {
    test('maintains hierarchy across breakpoints', () => {
      const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']
      
      breakpoints.forEach(bp => {
        const heading = getHeadingSize(bp)
        const body = getBodySize(bp)
        expect(heading).toBeGreaterThan(body)
      })
    })
  })
})
```

#### Integration Tests (Middle Layer)
```typescript
describe('Hero Section Integration', () => {
  test('renders all essential elements on mobile', () => {
    render(<HeroSection />, { 
      viewport: { width: 375, height: 667 }
    })
    
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/Full-Stack Developer/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /View Projects/ })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Professional headshot/ })).toBeInTheDocument()
  })
  
  test('adapts layout for different screen sizes', async () => {
    const { rerender } = render(<HeroSection />)
    
    // Mobile layout
    await waitFor(() => {
      const container = screen.getByTestId('hero-content')
      expect(container).toHaveClass('flex-col') // Stacked layout
    })
    
    // Desktop layout
    Object.defineProperty(window, 'innerWidth', { value: 1024 })
    window.dispatchEvent(new Event('resize'))
    
    await waitFor(() => {
      const container = screen.getByTestId('hero-content')
      expect(container).toHaveClass('lg:grid') // Grid layout
    })
  })
  
  test('maintains accessibility across breakpoints', async () => {
    const { container } = render(<HeroSection />)
    
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

#### Visual Regression Tests (Top Layer)
```typescript
// Using Playwright for cross-browser visual testing
test.describe('Hero Visual Regression', () => {
  const breakpoints = [
    { name: 'mobile-sm', width: 320 },
    { name: 'mobile-lg', width: 414 },
    { name: 'tablet', width: 768 },
    { name: 'desktop', width: 1024 },
    { name: 'desktop-lg', width: 1440 }
  ]
  
  breakpoints.forEach(({ name, width }) => {
    test(`renders correctly at ${name} (${width}px)`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 })
      await page.goto('/hero-section-test')
      
      // Wait for animations and images to load
      await page.waitForLoadState('networkidle')
      await page.locator('[data-testid="hero-section"]').waitFor()
      
      await expect(page.locator('[data-testid="hero-section"]')).toHaveScreenshot(
        `hero-${name}.png`
      )
    })
  })
  
  test('animations work correctly', async ({ page }) => {
    await page.goto('/hero-section-test')
    
    // Test typewriter animation
    const typewriterElement = page.locator('[data-testid="typewriter-text"]')
    await expect(typewriterElement).toBeVisible()
    
    // Wait for animation to complete one cycle
    await page.waitForTimeout(4000)
    await expect(typewriterElement).toHaveScreenshot('typewriter-animation.png')
  })
})
```

#### Performance Tests
```typescript
describe('Hero Performance', () => {
  test('meets Core Web Vitals on mobile', async () => {
    const metrics = await lighthouse(url, {
      onlyCategories: ['performance'],
      formFactor: 'mobile'
    })
    
    expect(metrics.lcp).toBeLessThan(2.5) // Largest Contentful Paint
    expect(metrics.fid).toBeLessThan(100) // First Input Delay  
    expect(metrics.cls).toBeLessThan(0.1) // Cumulative Layout Shift
  })
  
  test('loads efficiently on slow connections', async () => {
    // Simulate 3G connection
    await page.emulateNetworkConditions({
      offline: false,
      downloadThroughput: 1.6 * 1024 * 1024 / 8, // 1.6 Mbps
      uploadThroughput: 750 * 1024 / 8,           // 750 Kbps
      latency: 150
    })
    
    const startTime = performance.now()
    await page.goto('/hero-section-test')
    await page.locator('[data-testid="hero-section"]').waitFor()
    const loadTime = performance.now() - startTime
    
    expect(loadTime).toBeLessThan(3000) // 3 second load time target
  })
})
```

#### Device-Specific Tests
```typescript
describe('Device Compatibility', () => {
  const devices = [
    'iPhone SE',
    'iPhone 12',
    'iPhone 14 Pro Max', 
    'Galaxy S8+',
    'iPad Mini',
    'iPad Pro'
  ]
  
  devices.forEach(deviceName => {
    test(`works correctly on ${deviceName}`, async ({ browser }) => {
      const device = devices[deviceName]
      const context = await browser.newContext({
        ...device
      })
      
      const page = await context.newPage()
      await page.goto('/hero-section-test')
      
      // Test touch interactions
      await page.locator('[data-testid="cta-button"]').tap()
      await expect(page).toHaveURL(/.*projects/)
      
      await context.close()
    })
  })
})
```

### Testing Environment Setup

```typescript
// Jest configuration for responsive testing
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}

// Test setup file
import '@testing-library/jest-dom'
import { configure } from '@testing-library/react'
import ResizeObserver from 'resize-observer-polyfill'

// Configure testing library
configure({ testIdAttribute: 'data-testid' })

// Mock ResizeObserver
global.ResizeObserver = ResizeObserver

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() { return null }
  disconnect() { return null }
  unobserve() { return null }
}

// Viewport testing utilities
export const setViewport = (width: number, height: number = 800) => {
  Object.defineProperties(window, {
    innerWidth: { value: width, writable: true },
    innerHeight: { value: height, writable: true }
  })
  window.dispatchEvent(new Event('resize'))
}
```

### Continuous Testing Strategy

1. **Unit Tests**: Run on every commit (< 30 seconds)
2. **Integration Tests**: Run on pull requests (< 5 minutes)  
3. **Visual Regression**: Run nightly and on design changes (< 15 minutes)
4. **Performance Tests**: Run weekly and before releases (< 30 minutes)
5. **Device Tests**: Run before major releases (< 60 minutes)

This comprehensive testing approach ensures the mobile hero UX optimization maintains high quality, performance, and accessibility across all supported devices and browsers.