import PageHeader from "@/components/ui/page-header"
import AnimatedDiv from "@/components/ui/animated-div"

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Understanding how we collect, use, and protect your personal information."
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedDiv className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <h2>1. Introduction</h2>
            <p>
              Welcome to JAYAA IT Solution Pvt. Ltd. ("Company", "we", "our", "us"). We are committed to protecting your
              personal information and your right to privacy. If you have any questions or concerns about this privacy
              notice, or our practices with regards to your personal information, please contact us at
              sanjayj@jayaaitsolution.com.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in
              obtaining information about us or our products and Services, when you participate in activities on the
              Website or otherwise when you contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions with us and the
              Website, the choices you make and the products and features you use. The personal information we collect
              may include the following: names; phone numbers; email addresses; mailing addresses; job titles; contact
              preferences; and other similar information.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below.
              We process your personal information for these purposes in reliance on our legitimate business interests,
              in order to enter into or perform a contract with you, with your consent, and/or for compliance with our
              legal obligations.
            </p>
            <ul>
              <li>To send administrative information to you.</li>
              <li>To protect our Services.</li>
              <li>To respond to legal requests and prevent harm.</li>
              <li>To manage user accounts.</li>
              <li>To deliver and facilitate delivery of services to the user.</li>
            </ul>

            <h2>4. Will Your Information Be Shared With Anyone?</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect
              your rights, or to fulfill business obligations.
            </p>

            <h2>5. How Long Do We Keep Your Information?</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in
              this privacy notice, unless a longer retention period is required or permitted by law (such as tax,
              accounting or other legal requirements).
            </p>

            <h2>6. How Do We Keep Your Information Safe?</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the
              security of any personal information we process. However, despite our safeguards and efforts to secure
              your information, no electronic transmission over the Internet or information storage technology can be
              guaranteed to be 100% secure.
            </p>

            <h2>7. Do We Make Updates to This Notice?</h2>
            <p>
              Yes, we will update this notice as necessary to stay compliant with relevant laws. The updated version
              will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is
              accessible.
            </p>

            <h2>8. How Can You Contact Us About This Notice?</h2>
            <p>
              If you have questions or comments about this notice, you may email us at sanjayj@jayaaitsolution.com or by
              post to: 803/8, Ekatva Onyx, Wagle Estate Thane West-400604.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </AnimatedDiv>
        </div>
      </section>
    </>
  )
}
