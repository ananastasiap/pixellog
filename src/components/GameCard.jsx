import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PropTypes from "prop-types";
import { getLabelStatus } from "../utils/helpers/statusLabels.js";
import { Button } from "@/components/ui/button";

export const GameCard = ({ image, name, status, onDelete }) => {
  return (
    <Card className="relative group w-2xs bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <CardHeader>
        <img
          src={image}
          className="rounded h-64 w-full object-cover"
          alt={`${name} cover`}
          loading="lazy"
        />

        <Button
          variant="destructive"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          onClick={onDelete}
        >
          ✕
        </Button>
      </CardHeader>
      <CardContent>
        <h3 className="font-medium">{name}</h3>
        <Badge variant="outline" className="lower mt-2">
          {getLabelStatus(status)}
        </Badge>
      </CardContent>
    </Card>
  );
};

GameCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
