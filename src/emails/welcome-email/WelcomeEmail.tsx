import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
  Hr,
  Preview,
} from "@react-email/components";
import { WelcomeEmailPropsType } from "@/types";

import { styles } from "./style";

export function WelcomeEmail({ email }: WelcomeEmailPropsType) {
  const currentYear = new Date().getFullYear();

  return (
    <Html lang="en" dir="ltr">
      <Head />

      <Preview>
        Welcome to Fyrre Magazine — your front row seat to art, design &
        culture.
      </Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Heading style={styles.logo}>FYRRE MAGAZINE</Heading>
            <Text style={styles.logoSub}>
              Modern Magazine & Digital Content Hub
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.hero}>
            <Text style={styles.heroLabel}>— Welcome aboard</Text>
            <Text style={styles.heroTitle}>
              You're now part of something worth reading.
            </Text>
            <Text style={styles.heroBody}>
              Thank you for subscribing to Fyrre Magazine. You've just joined a
              community of curious minds who believe that great design, bold
              ideas, and honest stories deserve your full attention.
            </Text>
            <Text style={styles.heroBody}>
              Starting now, expect carefully curated articles, in-depth
              interviews, design spotlights, and podcast drops — all delivered
              directly to <span style={styles.highlight}>{email}</span>.
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.section}>
            <Text style={styles.sectionLabel}>WHAT'S COMING YOUR WAY</Text>

            <Row style={styles.featureRow}>
              <Column style={styles.featureCol}>
                <Text style={styles.featureTitle}>✦ Magazine</Text>
                <Text style={styles.featureText}>
                  Long-form articles on art, architecture, and contemporary
                  culture written by voices that matter.
                </Text>
              </Column>
            </Row>

            <Row style={styles.featureRow}>
              <Column style={styles.featureCol}>
                <Text style={styles.featureTitle}>✦ Podcast</Text>
                <Text style={styles.featureText}>
                  Raw conversations with designers, artists, and thinkers
                  pushing boundaries in their fields.
                </Text>
              </Column>
            </Row>

            <Row style={styles.featureRow}>
              <Column style={styles.featureCol}>
                <Text style={styles.featureTitle}>✦ Authors</Text>
                <Text style={styles.featureText}>
                  Get to know the writers and creators behind the work — their
                  process, their obsessions, their craft.
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.ctaSection}>
            <Text style={styles.ctaText}>Ready to explore?</Text>
            <Link
              href="https://fyrre-magazine-website.netlify.app/magazine"
              style={styles.ctaButton}
            >
              Read the Latest Magazine →
            </Link>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              You're receiving this email because you signed up at{" "}
              <Link
                href="https://fyrre-magazine-website.netlify.app"
                style={styles.footerLink}
              >
                fyrre-magazine-website.netlify.app
              </Link>
              . If this wasn't you, you can safely ignore this email.
            </Text>

            <Text style={styles.footerText}>
              Design by{" "}
              <Link
                href="https://dribbble.com/pawelgola"
                style={styles.footerLink}
              >
                Pawel Gola
              </Link>
              · Code by{" "}
              <Link
                href="https://github.com/souleymanesy7"
                style={styles.footerLink}
              >
                Souleymane Sy
              </Link>
            </Text>

            <Text style={styles.footerCopy}>
              © {currentYear} Fyrre Magazine. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeEmail;
