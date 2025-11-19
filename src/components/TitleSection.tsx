import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Code, Presentation, Mail, Globe, GraduationCap } from 'lucide-react';
import nurbgenLogo from '@/assets/nurbgen-logo.png';

interface AuthorLink {
  googleScholar?: string;
  email?: string;
  website?: string;
}

interface Author {
  name: string;
  links: AuthorLink;
}

const authors: Author[] = [
  {
    name: "Muhammad Usama",
    links: {
      googleScholar: "https://scholar.google.com/citations?user=zcRPmUoAAAAJ&hl=en",
      email: "Muhammad.Usama@dfki.de",
      website: "https://www.dfki.de/web/ueber-uns/mitarbeiter/person/muus02"
    }
  },
  {
    name: "Mohammad Sadil Khan",
    links: {
      googleScholar: "https://scholar.google.com/citations?user=XIDQo_IAAAAJ&hl=en&authuser=1",
      email: "mohammad.khan@dfki.de",
      website: "https://mdsadilkhan.onrender.com/"
    }
  },
  {
    name: "Didier Stricker",
    links: {
      googleScholar: "https://scholar.google.com/citations?user=ImhXfxgAAAAJ&hl=en&authuser=1&oi=ao",
      email: "didier.stricker@dfki.de"
    }
  },
  {
    name: "Muhammad Zeshan Afzal",
    links: {
      googleScholar: "https://scholar.google.com/citations?user=kHMVj6oAAAAJ&hl=en&authuser=1&oi=sra",
      email: "muhammad_zeshan.afzal@dfki.uni-kl.de",
      website: "https://av.dfki.de/members/afzal/"
    }
  }
];

export function TitleSection() {
  const [hoveredAuthor, setHoveredAuthor] = useState<number | null>(null);
  const [tooltipHovered, setTooltipHovered] = useState(false);

  return (
    <section className="relative py-16 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Logo and Title */}
        <div className="mb-8">
          <img 
            src={nurbgenLogo} 
            alt="NURBGen" 
            className="mx-auto w-full max-w-sm h-auto mb-4"
          />
          <p className="text-base md:text-lg text-muted-foreground font-body">
            High-Fidelity Text-to-CAD Generation through LLM-Driven NURBS Modeling
          </p>
        </div>

        {/* Authors */}
        <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg font-body">
          {authors.map((author, index) => (
            <div key={index} className="relative inline-block">
              <button
                className="text-foreground hover:text-primary transition-colors focus:outline-none focus:text-primary"
                onMouseEnter={() => setHoveredAuthor(index)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!tooltipHovered) setHoveredAuthor(null);
                  }, 100);
                }}
                onFocus={() => setHoveredAuthor(index)}
                onBlur={(e) => {
                  if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) {
                    setHoveredAuthor(null);
                  }
                }}
              >
                {author.name}
                {(index === 0 || index === 1) && <sup className="text-xs">*</sup>}
                {index === 1 && <sup className="text-xs">†</sup>}
              </button>

              {/* Tooltip Card */}
              {hoveredAuthor === index && (
                <Card 
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-3 shadow-lg z-50 min-w-[200px] animate-fade-in"
                  onMouseEnter={() => setTooltipHovered(true)}
                  onMouseLeave={() => {
                    setTooltipHovered(false);
                    setHoveredAuthor(null);
                  }}
                >
                  <div className="flex flex-col gap-2">
                    {author.links.googleScholar && (
                      <a
                        href={author.links.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <GraduationCap className="w-4 h-4" />
                        Google Scholar
                      </a>
                    )}
                    {author.links.email && (
                      <a
                        href={`mailto:${author.links.email}`}
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                    )}
                    {author.links.website && (
                      <a
                        href={author.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        Website
                      </a>
                    )}
                  </div>
                </Card>
              )}
            </div>
          ))}
        </div>

        {/* Affiliations */}
        <div className="text-sm text-muted-foreground mb-4 font-body">
          <sup>1</sup> DFKI, Germany · <sup>2</sup> RPTU, Germany · <sup>3</sup> MindGarage
        </div>
        
        <div className="text-xs text-muted-foreground mb-8 font-body">
          <sup>*</sup>Equally contributing first authors · <sup>†</sup>Corresponding Author
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <a href="#">
              <BookOpen className="w-5 h-5" />
              Paper
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="gap-2" disabled>
            <a href="#" className="pointer-events-none opacity-50">
              <Code className="w-5 h-5" />
              Code
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2" disabled>
            <a href="#" className="pointer-events-none opacity-50">
              <Presentation className="w-5 h-5" />
              Dataset
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
