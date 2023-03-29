import About from "@/lib/components/About";

export default function Page(props: any) {
  if (props.success) {
    return <About />;
  }
}

export async function getStaticProps() {
  return { props: { success: true } };
}
