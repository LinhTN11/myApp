import { Redirect } from 'expo-router';

export default function IndexRedirect() {
  // ✅ Dùng Redirect an toàn, không gây lỗi mount
  return <Redirect href="/lesson1" />;
}

