import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Github, Mail, ExternalLink, Copy, Check, Bold } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TitleSection } from "@/components/TitleSection";
import { FloatingBlocks } from "@/components/FloatingBlocks";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useState } from "react";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroBanner from "@/assets/hero-banner.jpg";
import architectureDiagram from "@/assets/architecture-diagram.jpg";
import architectureDiagramDark from "@/assets/architecture-diagram-dark.png";
import captionExamples from "@/assets/caption.png";
import complexityDiagram from "@/assets/complexity.png";
import partabcLogo from "@/assets/partabc-logo.png";
import nurbgenLogo from "@/assets/nurbgen-logo.png";
import socketImage from "@/assets/socket.png";
import rectangularPlateImage from "@/assets/rectangular-plate.png";
import sphericalCapsImage from "@/assets/spherical-caps.png";
import sphericalImage from "@/assets/spherical.png";
import { useTheme } from "next-themes";

const Index = () => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const citationText = `@article{nurbgen2025,
  title={NURBGen: High-Fidelity Text-to-CAD Generation through 
         LLM-Driven NURBS Modeling},
  author={Usama, Muhammad and Khan, Mohammad Sadil and 
          Stricker, Didier and Afzal, Muhammad Zeshan},
  journal={arXiv preprint},
  year={2025}
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    toast.success("Citation copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const datasetDistribution = [
    { name: 'Simple', value: 30000, percentage: 10, fill: 'hsl(var(--muted-foreground))' },
    { name: 'Moderate', value: 150000, percentage: 50, fill: 'hsl(var(--primary))' },
    { name: 'Complex', value: 120000, percentage: 40, fill: 'hsl(var(--secondary))' },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating Blocks Background */}
      <FloatingBlocks />
      
      {/* Fixed Header with Theme Toggle */}
      <header className="fixed top-0 right-0 z-50 p-4">
        <ThemeToggle />
      </header>

      {/* Title Section */}
      <TitleSection />

      {/* Hero Section */}
      <section className="border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="CAD Design Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
        </div>
        <div className="container mx-auto px-4 py-12 max-w-5xl relative z-10">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              First framework for text-to-CAD generation using NURBS surfaces through LLM-driven modeling
            </p>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Abstract</h2>
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed text-center">
                We present <img src={nurbgenLogo} alt="NURBGen" className="inline-block h-6 mx-1 align-middle" />, the first framework for text-to-CAD generation using NURBS surfaces. 
                <img src={nurbgenLogo} alt="NURBGen" className="inline-block h-6 mx-1 align-middle" /> generates structured, editable NURBS representations from text prompts, which can be directly converted into B-Rep format 
                using a fine-tuned LLM. We introduce <img src={partabcLogo} alt="partABC" className="inline-block h-6 mx-1 align-middle" />, a large-scale dataset of 300k part-level models with NURBS 
                annotations and high-quality generated captions. Our hybrid representation combines untrimmed NURBS with analytic primitives 
                to address trimming artifacts while enhancing geometric robustness and token efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Contributions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">First NURBS-Based Text-to-CAD</h3>
                <p className="text-muted-foreground">
                  First framework to generate industry-standard NURBS representations directly from text prompts using LLMs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold">partABC Dataset</h3>
                <p className="text-muted-foreground">
                  300k part-level CAD models with NURBS annotations and automatically generated high-quality captions (~85% accuracy).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-semibold">Hybrid Representation</h3>
                <p className="text-muted-foreground">
                  Novel hybrid approach combining untrimmed NURBS with analytic primitives for geometric robustness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Highlight */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Performance Highlights</h2>
          <p className="text-center text-muted-foreground mb-12">NURBGen significantly outperforms existing methods</p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">64.1%</div>
                <div className="text-sm text-muted-foreground">Human Preference (Top-1)</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary mb-2">61.6%</div>
                <div className="text-sm text-muted-foreground">GPT-4o Preference</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">1.8%</div>
                <div className="text-sm text-muted-foreground">Invalidity Ratio (Lowest)</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">4.43</div>
                <div className="text-sm text-muted-foreground">Chamfer Distance (×10²)</div>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
              <TabsTrigger value="user">User Evaluation</TabsTrigger>
              <TabsTrigger value="geometric">Geometric Evaluation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="user">
              <Card>
                <CardContent className="p-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">Model</th>
                        <th className="text-center py-3 px-4 font-semibold">User (1k) ↑</th>
                        <th className="text-center py-3 px-4 font-semibold">GPT ↑</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">GPT-4o</td>
                        <td className="text-center py-3 px-4">1.5</td>
                        <td className="text-center py-3 px-4">1.9</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">DeepCAD</td>
                        <td className="text-center py-3 px-4">5.6</td>
                        <td className="text-center py-3 px-4">6.1</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">Text2CAD</td>
                        <td className="text-center py-3 px-4">26.1</td>
                        <td className="text-center py-3 px-4">27.2</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="py-3 px-4 font-semibold">NURBGen (Ours)</td>
                        <td className="text-center py-3 px-4 font-semibold">64.1</td>
                        <td className="text-center py-3 px-4 font-semibold">61.6</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground mt-4">
                    ↑ indicates higher is better. User evaluation based on 1k human ratings.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="geometric">
              <Card>
                <CardContent className="p-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">Model</th>
                        <th className="text-center py-3 px-4 font-semibold">IR ↓</th>
                        <th className="text-center py-3 px-4 font-semibold">CD ↓</th>
                        <th className="text-center py-3 px-4 font-semibold">HD ↓</th>
                        <th className="text-center py-3 px-4 font-semibold">JSD ↓</th>
                        <th className="text-center py-3 px-4 font-semibold">MMD ↓</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">GPT-4o</td>
                        <td className="text-center py-3 px-4">0.17</td>
                        <td className="text-center py-3 px-4">7.2</td>
                        <td className="text-center py-3 px-4">0.36</td>
                        <td className="text-center py-3 px-4">72.87</td>
                        <td className="text-center py-3 px-4">4.17</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">DeepCAD</td>
                        <td className="text-center py-3 px-4">0.32</td>
                        <td className="text-center py-3 px-4">10.28</td>
                        <td className="text-center py-3 px-4">0.45</td>
                        <td className="text-center py-3 px-4">89.77</td>
                        <td className="text-center py-3 px-4">4.43</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">Text2CAD</td>
                        <td className="text-center py-3 px-4">0.05</td>
                        <td className="text-center py-3 px-4">9.66</td>
                        <td className="text-center py-3 px-4">0.42</td>
                        <td className="text-center py-3 px-4">85.27</td>
                        <td className="text-center py-3 px-4">4.54</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="py-3 px-4 font-semibold">NURBGen (Ours)</td>
                        <td className="text-center py-3 px-4 font-semibold">0.018</td>
                        <td className="text-center py-3 px-4 font-semibold">4.43</td>
                        <td className="text-center py-3 px-4 font-semibold">0.25</td>
                        <td className="text-center py-3 px-4 font-semibold">57.94</td>
                        <td className="text-center py-3 px-4 font-semibold">2.14</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground mt-4">
                    CD, JSD, and MMD values are multiplied by 10². ↓ indicates lower is better. IR: Invalidity Ratio, CD: Chamfer Distance, HD: Hausdorff Distance, JSD: Jensen-Shannon Divergence, MMD: Maximum Mean Discrepancy.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Architecture Overview</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our pipeline consists of two main stages: data preparation and model fine-tuning. 
            We process part-level CAD models, generate multi-view renderings with metadata, 
            and fine-tune a language model to generate NURBS-based representations.
          </p>
          <Card>
            <CardContent className="p-6">
              <img 
                src={theme === "dark" ? architectureDiagramDark : architectureDiagram} 
                alt="NURBGen Architecture - Data Preparation and Fine-tuning Pipeline" 
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Showcase */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Generated CAD Models</h2>
          <p className="text-center text-muted-foreground mb-12">
            Explore high-fidelity 3D CAD models generated by NURBGen from text descriptions
          </p>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-96 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={socketImage} 
                        alt="Socket head cap screw" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{fontFamily: 'cursive', fontWeight: '900' , fontSize: '22px'}}>
                      <span className="font-semibold" style={{ color: 'hsl(142, 71%, 45%)' }}>Socket head cap screw</span> with a large countersunk washer. Features a <span className="font-semibold" style={{ color: 'hsl(142, 71%, 45%)' }}>hexagonal</span> socket drive and a cylindrical threaded shank. Dimensions: length 92.96 mm, width 79.38 mm, height 43.66 mm. Ensure smooth curvature at transitions.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-96 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={rectangularPlateImage} 
                        alt="Rectangular plate" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{fontFamily: 'cursive', fontWeight: '900' , fontSize: '22px'}}>
                      Design a rectangular plate with dimensions <span className="font-semibold" style={{ color: 'hsl(142, 71%, 45%)' }}>330.20 mm x 233.40 mm x 6.00 mm</span>. Include <span className="font-semibold" style={{ color: 'hsl(142, 71%, 45%)' }}>two square through-holes near each end</span>.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-96 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={sphericalCapsImage} 
                        alt="Cylindrical bushing" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{fontFamily: 'cursive', fontWeight: '900' , fontSize: '22px'}}>
                      <span className="font-semibold" style={{ color: 'hsl(142, 71%, 45%)' }}>Cylindrical bushing</span> with <span className="font-semibold" style={{ color: 'hsl(142, 71%, 45%)' }}>flanges</span> on both ends, featuring a central <span className="font-semibold" style={{ color: 'hsl(142, 71%, 45%)' }}>hollow bore</span>. Symmetrical geometry, suitable for insertion, guiding, or alignment in mechanical assemblies.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-96 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={sphericalImage} 
                        alt="Spherical object" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{fontFamily: 'cursive', fontWeight: '900' , fontSize: '22px'}}>
                      A <span className="font-semibold" style={{ color: 'hsl(142, 71%, 45%)' }}>spherical</span> object with subtle indentations on its surface, exhibiting uniform dimensions of 2.33 mm in length, width, and height. The sphere has <span className="font-semibold" style={{ color: 'hsl(142, 71%, 45%)' }}>minor linear markings</span> near the base.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Method Overview */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Method Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Pipeline</Badge>
                <h3 className="text-xl font-semibold">NURBS Generation Pipeline</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fine-tuned Qwen3-4B model with LoRA (rank 64, α=128)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Generates structured JSON with untrimmed NURBS surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Hybrid representation with analytic primitives for robustness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Direct conversion to industry-standard B-Rep format</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">Dataset</Badge>
                <h3 className="text-xl font-semibold">partABC Dataset Creation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Extracted 3M part-level CAD models from ABC dataset</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Complexity-aware filtering (10% simple, 50% moderate, 40% complex)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Multi-view rendering with InternVL3-13B for caption generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Metadata-guided captions with geometric details (~85% accuracy)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Training Details</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-muted-foreground mb-2"><span className="font-semibold text-foreground">Model:</span> Qwen3-4B with LoRA fine-tuning</p>
                  <p className="text-muted-foreground mb-2"><span className="font-semibold text-foreground">Training:</span> 180k steps, batch size 1, 4×H100 GPUs</p>
                  <p className="text-muted-foreground mb-2"><span className="font-semibold text-foreground">Context:</span> 8192 tokens (training), 14k (inference)</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2"><span className="font-semibold text-foreground">Optimizer:</span> AdamW, lr=5×10⁻⁵ with linear warm-up</p>
                  <p className="text-muted-foreground mb-2"><span className="font-semibold text-foreground">Duration:</span> 3 days of training</p>
                  <p className="text-muted-foreground mb-2"><span className="font-semibold text-foreground">Throughput:</span> ~800 tokens/second on RTX 3090</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dataset Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">The partABC Dataset</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Dataset Overview</h3>
                <p className="text-muted-foreground">
                  We introduce <span className="font-semibold text-foreground">partABC</span>, a large-scale dataset of 300k part-level CAD models 
                  with NURBS annotations and high-quality captions. The dataset is built from the ABC dataset with sophisticated 
                  processing and filtering to ensure geometric diversity and complexity.
                </p>
                
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">300k</div>
                    <div className="text-sm text-muted-foreground">Part-Level Models</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">~85%</div>
                    <div className="text-sm text-muted-foreground">Caption Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">3 Tiers</div>
                    <div className="text-sm text-muted-foreground">Complexity Levels</div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Complexity Distribution:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <span className="font-medium">Simple (10%):</span> Basic geometric shapes</li>
                    <li>• <span className="font-medium">Moderate (50%):</span> Intermediate complexity with multiple features</li>
                    <li>• <span className="font-medium">Complex (40%):</span> Advanced geometry with many holes and intricate surfaces</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Caption Examples</h3>
                <img 
                  src={captionExamples} 
                  alt="partABC Caption Examples" 
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-sm text-muted-foreground">
                  High-quality captions generated using multi-view rendering and metadata guidance
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Complexity Tiers</h3>
              <Tabs defaultValue="simple" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="simple">Simple</TabsTrigger>
                  <TabsTrigger value="moderate">Moderate</TabsTrigger>
                  <TabsTrigger value="complex">Complex</TabsTrigger>
                </TabsList>
                
                <TabsContent value="simple" className="mt-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    {/* <div className="space-y-2">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground">Model 1</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Basic geometric shapes with minimal features. Suitable for elementary CAD operations.
                      </p>
                    </div> */}
                    <div className="space-y-2">
                      <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                          src="/src/assets/simple_0.png"
                          alt="Model 1"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <p className="text-sm text-muted-foreground" style={{fontFamily: 'cursive', fontWeight: '900' , fontSize: '18px'}}>
                         Design a rectangular prism with dimensions 152.40 mm x 6.35 mm x 6.35 mm featuring rounded edges using fillets.
                      </p>
                    </div>
                    <div className="space-y-2">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                          src="/src/assets/simple_1.png"
                          alt="Model 1"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <p className="text-sm text-muted-foreground" style={{fontFamily: 'cursive', fontWeight: '900' , fontSize: '18px'}}>
                         Design cylindrical component with outer diameter 33.97 mm and length 13.00 mm. Feature includes one central through hole along its axis. Ensure hollow center for passage alignment.                      </p>
                    </div>
                    <div className="space-y-2">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                          src="/src/assets/simple_2.png"
                          alt="Model 1"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <p className="text-sm text-muted-foreground" style={{fontFamily: 'cursive', fontWeight: '900' , fontSize: '18px'}}>
                         A rectangular prism with chamfered edges forms a Y-shaped structure featuring three equally sized arms extending from a central block.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="moderate" className="mt-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground">Model 1</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Intermediate complexity with multiple surfaces and moderate feature count.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground">Model 2</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Parts with combined geometric operations and structured NURBS assemblies.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground">Model 3</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Standard engineering components with balanced surface complexity and detail.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="complex" className="mt-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground">Model 1</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        High-detail assemblies with intricate NURBS networks and advanced topology.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground">Model 2</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Advanced mechanical parts with numerous surfaces, fillets, and complex features.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground">Model 3</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Sophisticated designs requiring extensive NURBS manipulation and precise control.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Dataset Distribution</h3>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={datasetDistribution}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="name" 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '0.5rem',
                      }}
                      formatter={(value: number) => [value.toLocaleString(), 'Samples']}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {datasetDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="space-y-3">
                  {datasetDistribution.map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.fill }}
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">{item.percentage}%</div>
                        <div className="text-xs text-muted-foreground">{item.value.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Citation */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Citation</h2>
          <Card>
            <CardContent className="p-6">
              <div className="relative">
                <pre className="text-xs md:text-sm bg-muted/50 p-4 rounded overflow-x-auto">
{citationText}
                </pre>
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2 gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 DFKI | MindGarage | RPTU Kaiserslautern-Landau</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:mohammad.khan@dfki.de" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
