import React, { useEffect } from 'react';

// Simple icon components 
const Flask = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M10 2v7.31"></path>
    <path d="M14 9.3V2"></path>
    <path d="M8.5 2h7"></path>
    <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
    <path d="M5.52 16h12.96"></path>
  </svg>
)

const Microscope = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M6 18h8"></path>
    <path d="M3 22h18"></path>
    <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
    <path d="M9 14h2"></path>
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
  </svg>
)

const LineChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M3 3v18h18"></path>
    <path d="m19 9-5 5-4-4-3 3"></path>
  </svg>
)

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
)

// Custom Link component to replace Next.js Link
const Link = ({ href, className, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default function HomePage() {
  // Initialize tab functionality when component mounts
  useEffect(() => {
    const tabTriggers = document.querySelectorAll('.tabs-trigger');
    const tabContents = document.querySelectorAll('.tabs-content');
    
    tabTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        // Remove active state from all triggers and contents
        tabTriggers.forEach(t => t.setAttribute('data-state', 'inactive'));
        tabContents.forEach(c => c.setAttribute('data-state', 'inactive'));
        
        // Set active state for clicked trigger and corresponding content
        trigger.setAttribute('data-state', 'active');
        const tabId = trigger.getAttribute('data-tab');
        const content = document.querySelector(`.tabs-content[data-tab="${tabId}"]`);
        if (content) content.setAttribute('data-state', 'active');
      });
    });
    
    // Cleanup event listeners on unmount
    return () => {
      tabTriggers.forEach(trigger => {
        trigger.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Flask />
          <span className="ml-2 text-xl font-bold">CHEM-IS-TRY, Inc.</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#overview">
            Overview
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#analytics">
            Analytics
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Clinical Trials Analysis Division
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  25 years of chemical expertise meets cutting-edge clinical trial analysis. Advancing healthcare
                  through data-driven insights.
                </p>
              </div>
              <div className="space-x-4">
                <button className="btn gap-2">
                  Get Started
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="lg:grid-cols-3 gap-6 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <Flask />
                  <h3 className="text-xl font-bold">Chemical Legacy</h3>
                </div>
                <p className="text-muted-foreground">
                  25 years of excellence in specialty chemical manufacturing, bringing precision and expertise to every
                  project.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <Microscope />
                  <h3 className="text-xl font-bold">Clinical Expertise</h3>
                </div>
                <p className="text-muted-foreground">
                  Specialized in Phase 1 clinical trials, including comprehensive bioequivalence studies and advanced
                  analytics.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <LineChart />
                  <h3 className="text-xl font-bold">Data Science</h3>
                </div>
                <p className="text-muted-foreground">
                  Advanced capabilities in Python programming, statistical analysis, and data-driven decision making.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="analytics" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Analytics Steps in Phase 1 Clinical Trials
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Our comprehensive approach to clinical trial analysis ensures thorough evaluation and reliable
                  results.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-8">
              <div className="tabs">
                <div className="tabs-list">
                  <button className="tabs-trigger" data-state="active" data-tab="study-design">Design</button>
                  <button className="tabs-trigger" data-tab="participant">Selection</button>
                  <button className="tabs-trigger" data-tab="dose">Dosing</button>
                  <button className="tabs-trigger" data-tab="safety">Safety</button>
                  <button className="tabs-trigger" data-tab="pk">PK</button>
                  <button className="tabs-trigger" data-tab="pd">PD</button>
                  <button className="tabs-trigger" data-tab="efficacy">Efficacy</button>
                  <button className="tabs-trigger" data-tab="analysis">Analysis</button>
                </div>
                <div className="tabs-content" data-state="active" data-tab="study-design">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Study Design</div>
                      <div className="card-description">Open-label and dose-escalation designs</div>
                    </div>
                    <div className="card-content">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Single Ascending Dose (SAD) studies</li>
                        <li>Multiple Ascending Dose (MAD) studies</li>
                        <li>Protocol development and optimization</li>
                        <li>Statistical power calculations</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tabs-content" data-tab="participant">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Participant Selection</div>
                      <div className="card-description">Careful selection of study participants</div>
                    </div>
                    <div className="card-content">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Healthy volunteer recruitment</li>
                        <li>Patient enrollment for high-risk therapies</li>
                        <li>Inclusion/exclusion criteria</li>
                        <li>Demographics analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tabs-content" data-tab="dose">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Dose Determination</div>
                      <div className="card-description">Establishing safe and effective dosing</div>
                    </div>
                    <div className="card-content">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Safe starting dose calculation</li>
                        <li>Dose escalation strategy</li>
                        <li>Maximum Tolerated Dose (MTD) identification</li>
                        <li>Dose-response relationship analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tabs-content" data-tab="safety">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Safety Monitoring</div>
                      <div className="card-description">Comprehensive safety assessment throughout the trial</div>
                    </div>
                    <div className="card-content">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Adverse event collection and categorization</li>
                        <li>Vital signs monitoring and analysis</li>
                        <li>Laboratory safety parameters evaluation</li>
                        <li>Data Safety Monitoring Board (DSMB) oversight</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tabs-content" data-tab="pk">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Pharmacokinetics</div>
                      <div className="card-description">ADME studies and concentration-time profiles</div>
                    </div>
                    <div className="card-content">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Bioavailability and bioequivalence assessment</li>
                        <li>Drug concentration measurements in plasma and tissues</li>
                        <li>Half-life and clearance rate determination</li>
                        <li>Population PK modeling and simulation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tabs-content" data-tab="pd">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Pharmacodynamics</div>
                      <div className="card-description">Measuring drug effects on the body</div>
                    </div>
                    <div className="card-content">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Biomarker identification and validation</li>
                        <li>Receptor binding and occupancy studies</li>
                        <li>Dose-response relationship characterization</li>
                        <li>PK/PD modeling for optimal dosing strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tabs-content" data-tab="efficacy">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Efficacy Endpoints</div>
                      <div className="card-description">Evaluating treatment effectiveness</div>
                    </div>
                    <div className="card-content">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Primary and secondary endpoint definition</li>
                        <li>Surrogate marker assessment and validation</li>
                        <li>Clinical outcome measurements</li>
                        <li>Quality of life and patient-reported outcomes</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tabs-content" data-tab="analysis">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Data Analysis</div>
                      <div className="card-description">Advanced statistical methods and reporting</div>
                    </div>
                    <div className="card-content">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Statistical analysis plan development</li>
                        <li>Interim analysis for adaptive trial designs</li>
                        <li>Bayesian statistical approaches</li>
                        <li>Comprehensive clinical study reports (CSR)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Advance Your Clinical Research?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Contact us to discuss how our expertise can support your clinical development programs.
                </p>
              </div>
              <div className="space-x-4">
                <button className="btn gap-2">
                  Contact Us
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Flask />
              <span className="text-xl font-bold">CHEM-IS-TRY, Inc.</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 CHEM-IS-TRY, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 