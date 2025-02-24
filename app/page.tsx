"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight, FlaskRoundIcon as Flask, LineChart, Microscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Flask className="h-6 w-6 text-primary" />
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
                <Button className="gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <Flask className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Chemical Legacy</h3>
                </div>
                <p className="text-muted-foreground">
                  25 years of excellence in specialty chemical manufacturing, bringing precision and expertise to every
                  project.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <Microscope className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Clinical Expertise</h3>
                </div>
                <p className="text-muted-foreground">
                  Specialized in Phase 1 clinical trials, including comprehensive bioequivalence studies and advanced
                  analytics.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <LineChart className="h-6 w-6" />
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
              <Tabs defaultValue="study-design" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                  <TabsTrigger value="study-design">Design</TabsTrigger>
                  <TabsTrigger value="participant">Selection</TabsTrigger>
                  <TabsTrigger value="dose">Dosing</TabsTrigger>
                  <TabsTrigger value="safety">Safety</TabsTrigger>
                  <TabsTrigger value="pk">PK</TabsTrigger>
                  <TabsTrigger value="pd">PD</TabsTrigger>
                  <TabsTrigger value="efficacy">Efficacy</TabsTrigger>
                  <TabsTrigger value="analysis">Analysis</TabsTrigger>
                </TabsList>
                <TabsContent value="study-design">
                  <Card>
                    <CardHeader>
                      <CardTitle>Study Design</CardTitle>
                      <CardDescription>Open-label and dose-escalation designs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Single Ascending Dose (SAD) studies</li>
                        <li>Multiple Ascending Dose (MAD) studies</li>
                        <li>Protocol development and optimization</li>
                        <li>Statistical power calculations</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="participant">
                  <Card>
                    <CardHeader>
                      <CardTitle>Participant Selection</CardTitle>
                      <CardDescription>Careful selection of study participants</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Healthy volunteer recruitment</li>
                        <li>Patient enrollment for high-risk therapies</li>
                        <li>Inclusion/exclusion criteria</li>
                        <li>Demographics analysis</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="dose">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dose Determination</CardTitle>
                      <CardDescription>Establishing safe and effective dosing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Safe starting dose calculation</li>
                        <li>Dose escalation strategy</li>
                        <li>Maximum Tolerated Dose (MTD) identification</li>
                        <li>Dose-response relationship analysis</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="safety">
                  <Card>
                    <CardHeader>
                      <CardTitle>Safety Assessments</CardTitle>
                      <CardDescription>Continuous monitoring of safety parameters</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Adverse event monitoring</li>
                        <li>Vital signs tracking</li>
                        <li>Laboratory parameter analysis</li>
                        <li>Dose-Limiting Toxicities (DLTs) identification</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="pk">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pharmacokinetic Evaluations</CardTitle>
                      <CardDescription>ADME analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Absorption analysis</li>
                        <li>Distribution patterns</li>
                        <li>Metabolism profiling</li>
                        <li>Excretion studies</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="pd">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pharmacodynamic Evaluations</CardTitle>
                      <CardDescription>Biological effects assessment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Mechanism of action studies</li>
                        <li>Biomarker measurement</li>
                        <li>Target engagement assessment</li>
                        <li>Dose-response relationship</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="efficacy">
                  <Card>
                    <CardHeader>
                      <CardTitle>Preliminary Efficacy</CardTitle>
                      <CardDescription>Early efficacy signals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Response rate assessment</li>
                        <li>Biomarker analysis</li>
                        <li>Clinical outcome measures</li>
                        <li>Statistical significance testing</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="analysis">
                  <Card>
                    <CardHeader>
                      <CardTitle>Data Analysis and Reporting</CardTitle>
                      <CardDescription>Comprehensive data evaluation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Safety data compilation</li>
                        <li>PK/PD data analysis</li>
                        <li>Statistical reporting</li>
                        <li>Development recommendations</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
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
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}