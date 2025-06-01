import PageHeader from "@/components/ui/page-header"
import AnimatedDiv from "@/components/ui/animated-div"

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="Please read these terms and conditions carefully before using Our Service."
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedDiv className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <h2>1. Agreement to Terms</h2>
            <p>
              By using our services, you agree to be bound by these Terms of Service. If you disagree with any part of
              the terms, then you may not access the service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              JAYAA IT Solution Pvt. Ltd. provides various IT services including but not limited to IT security,
              infrastructure management, consultancy, and support as detailed on our website.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>
              You are responsible for your use of the services and for any content you provide, including compliance
              with applicable laws, rules, and regulations. You should only provide content that you are comfortable
              sharing with others.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features and functionality are
              and will remain the exclusive property of JAYAA IT Solution Pvt. Ltd. and its licensors. Our trademarks
              and trade dress may not be used in connection with any product or service without the prior written
              consent of JAYAA IT Solution Pvt. Ltd.
            </p>

            <h2>5. Termination</h2>
            <p>
              We may terminate or suspend your access to our service immediately, without prior notice or liability, for
              any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall JAYAA IT Solution Pvt. Ltd., nor its directors, employees, partners, agents, suppliers,
              or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
              from your access to or use of or inability to access or use the service.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at sanjayj@jayaaitsolution.com.</p>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </AnimatedDiv>
        </div>
      </section>
    </>
  )
}
