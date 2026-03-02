import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Section,
  Row,
  Column,
  Text,
  Link,
  Hr,
  Preview,
} from "@react-email/components";
import { AdminNotificationEmailPropsType } from "@/types";
import { styles } from "./style";

export function AdminNotificationEmail({
  subscriberEmail,
  subscribedAt = new Date().toUTCString(),
  totalSubscribers,
}: AdminNotificationEmailPropsType) {
  const currentYear = new Date().getFullYear();

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        New subscriber: {subscriberEmail} just joined Fyrre Magazine.
      </Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Heading style={styles.logo}>FYRRE MAGAZINE</Heading>
            <Text style={styles.logoSub}>ADMIN DASHBOARD</Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.mainSection}>
            <Text style={styles.label}>— Newsletter Notification</Text>
            <Text style={styles.title}>Someone just joined your list.</Text>
            <Text style={styles.subtitle}>
              A new reader subscribed to the Fyrre Magazine newsletter. Here are
              the details:
            </Text>
          </Section>

          <Section style={styles.dataSection}>
            <Row style={styles.dataRow}>
              <Column style={styles.dataLabelCol}>
                <Text style={styles.dataLabel}>EMAIL</Text>
              </Column>
              <Column style={styles.dataValueCol}>
                <Text style={styles.dataValue}>{subscriberEmail}</Text>
              </Column>
            </Row>

            <Hr style={styles.dataRowDivider} />

            <Row style={styles.dataRow}>
              <Column style={styles.dataLabelCol}>
                <Text style={styles.dataLabel}>DATE</Text>
              </Column>
              <Column style={styles.dataValueCol}>
                <Text style={styles.dataValue}>{subscribedAt}</Text>
              </Column>
            </Row>

            <Hr style={styles.dataRowDivider} />

            <Row style={styles.dataRow}>
              <Column style={styles.dataLabelCol}>
                <Text style={styles.dataLabel}>SOURCE</Text>
              </Column>
              <Column style={styles.dataValueCol}>
                <Text style={styles.dataValue}>Footer Newsletter Form</Text>
              </Column>
            </Row>

            {totalSubscribers !== undefined && (
              <>
                <Hr style={styles.dataRowDivider} />
                <Row style={styles.dataRow}>
                  <Column style={styles.dataLabelCol}>
                    <Text style={styles.dataLabel}>TOTAL SUBS</Text>
                  </Column>
                  <Column style={styles.dataValueCol}>
                    <Text style={styles.dataValueHighlight}>
                      {totalSubscribers}
                    </Text>
                  </Column>
                </Row>
              </>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.actionSection}>
            <Text style={styles.actionLabel}>QUICK ACTIONS</Text>
            <Row>
              <Column style={{ paddingRight: "12px" }}>
                <Link
                  href={`mailto:${subscriberEmail}`}
                  style={styles.actionButtonPrimary}
                >
                  ← Reply to Subscriber
                </Link>
              </Column>
              <Column>
                <Link
                  href="https://resend.com/audiences"
                  style={styles.actionButtonSecondary}
                >
                  View in Resend →
                </Link>
              </Column>
            </Row>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              This is an automated notification from your Fyrre Magazine
              newsletter system. Do not reply to this email.
            </Text>
            <Text style={styles.footerCopy}>
              © {currentYear} Fyrre Magazine — Internal Use Only
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default AdminNotificationEmail;
