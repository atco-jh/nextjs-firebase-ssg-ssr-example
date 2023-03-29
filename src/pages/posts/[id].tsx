import Posts from "@/lib/components/Posts";

export default function Page(props: any) {
  return <Posts apiData={props.apiData} />;
}

export async function getServerSideProps({ params }: any) {
  return {
    props: {
      success: true,
      apiData: JSON.parse(JSON.stringify({ id: params.id })),
    },
  };
}
