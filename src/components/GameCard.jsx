import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const GameCard = () => {
  return (
    <Card className="w-2xs bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <CardHeader>
        <img
          src="https://upload.wikimedia.org/wikipedia/ru/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg"
          className="rounded h-64 w-full object-cover"
          alt=""
          loading="lazy"
        />
      </CardHeader>
      <CardContent>
        <h3 className="font-medium">The Witcher 3</h3>
        <Badge variant="outline" className="lower mt-2">
          Пройдено
        </Badge>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};
