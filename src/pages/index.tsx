import Home from "@/lib/components/Home";

export default function Page(props: any) {
  if (props.success) {
    return <Home />;
  }
}

export async function getStaticProps() {
  return { props: { success: true } };
}
