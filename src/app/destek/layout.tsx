import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fırtına AI Kullanıcı Destek Merkezi | Ahmet Yasin Aktürk',
  description: 'Fırtına AI uygulaması ile ilgili sorularınız, teknik destek ve geri bildirim talepleriniz için bize doğrudan e-posta gönderebilirsiniz.',
};

export default function DestekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
