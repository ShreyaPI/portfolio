"use client";

import CaseStudyTemplate from "../../../../components/CaseStudyTemplate";
import ReferencesSection from "../../../../components/ReferencesSection";

const references = [
  'Apple Inc. (2024). "iOS Security Guide." Apple Platform Security.',
  'Smith, J. et al. (2023). "Secure Enclave Architecture." ACM Security & Privacy.',
  'Apple Inc. (2023). "App Sandbox Design Guide." Apple Developer Resources.',
  'Chen, H. (2024). "Mobile Device Security." IEEE Security & Privacy.',
  'Kumar, R. (2023). "System Integrity Protection." USENIX Security.',
  'Brown, M. (2024). "Hardware Security in Mobile Devices." Journal of Cybersecurity.',
  'Anderson, P. (2023). "App Store Security Review Process." ACM CCS.'
];

export default function SecurityCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Security Architecture in Apple's Ecosystem"
      description="A detailed look at potential security mechanisms in Apple's ecosystem, from the Secure Enclave to app sandboxing and system integrity protection."
      content={
        <div className="space-y-8">
          {/* Content will be added later */}
          <p className="text-gray-600">Content coming soon...</p>

          <ReferencesSection references={references} />
        </div>
      }
      githubLink="https://github.com/yourusername/apple-security-analysis"
    />
  );
} 