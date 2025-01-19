import MainLayout from "../../components/templates/MainLayout";
import Example from "../mdx-example/Example.mdx";

export default function Page() {
  return (
    <MainLayout>
      <article>
        <Example />
      </article>
    </MainLayout>
  )
}
