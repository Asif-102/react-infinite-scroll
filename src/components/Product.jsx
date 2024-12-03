import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";

export default function Product({ product: { title, thumbnail, price } }) {
  return (
    <Card>
      <CardHeader>
        <img
          src={thumbnail}
          alt={title}
          className="rounded-t-xl"
          width={600}
          height={300}
        />
      </CardHeader>
      <CardContent className="space-y-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription>Price : ${price}</CardDescription>
        <Button>Buy Now</Button>
      </CardContent>
    </Card>
  );
}
