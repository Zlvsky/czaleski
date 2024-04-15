import BigContainer from '@/components/layout/BigContainer'
import PageWrap from '@/components/layout/PageWrap'

const Title = () => (
  <h1 className="text-dark1 text-center text-2xl font-bold md:text-4xl">
    Privacy Policy
  </h1>
)

const PrivacyContent = () => (
  <div className="clean-style">
    <p>
      This privacy policy outlines the types of personal information that is received and
      collected by this website and how it is used.
    </p>
    <h2>Cookies</h2>
    <p>
      This website uses cookies for analytics purposes. By using this website, you consent
      to the use of cookies. Cookies are small text files that are stored on your device
      to track usage patterns and preferences.
    </p>
    <p>
      You can disable cookies in your browser settings if you do not wish to be tracked.
      Please note that disabling cookies may affect the functionality of this website.
    </p>
    <h2>Contact Information</h2>
    <p>
      If you have any questions or concerns about this privacy policy, you can contact
      Krzysztof Zaleski at <a href="mailto:zlvsky@icloud.com">zlvsky@icloud.com</a>.
    </p>
  </div>
)

function PrivacyPolicy() {
  return (
      <PageWrap>
        <BigContainer>
          <Title />
          <PrivacyContent />
        </BigContainer>
      </PageWrap>
  )
}

export default PrivacyPolicy
