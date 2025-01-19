import { Card, CardText, CardTitle } from "../atoms/Card";
import { Link } from "react-router";

export default function TipsLists() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Card>
        <CardTitle>Routing</CardTitle>
        <CardText>
          we use React Router as{" "}
          <Link
            to="https://reactrouter.com/home"
            target="_blank"
          >
            library
          </Link>
          .
        </CardText>
      </Card>
      <Card>
        <CardTitle>Atomic Design</CardTitle>
        <CardText>
          Group your components{" "}
          <Link
            to="https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97"
            target="_blank"
          >
            neatly
          </Link>
          .
        </CardText>
      </Card>
      <Card>
        <CardTitle>Try MDX</CardTitle>
        <CardText>
          Learn{" "}
          <Link
            to="https://mdxjs.com/"
            target="_blank"
          >
            how to use MDX
          </Link>{" "}
          or{" "}
          <Link
            to="/mdx-example"
          >
            see example
          </Link>
          .
        </CardText>
      </Card>
    </div>
  );
}
