import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameDetails } from "@/api/rawgApi";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setQuery, setResults, setSelectedStatus } from "../slices/searchSlice";
import { setSelectedGame } from "../slices/searchSlice";
import { addGame } from "../slices/gamesSlice";
import { STATUS_LABELS } from "@/utils/helpers/statusLabels";

export const AddGameModal = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);
  const selectedGame = useSelector((state) => state.search.selectedGame);
  const selectedStatus = useSelector((state) => state.search.selectedStatus);

  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    dispatch(setQuery(event.target.value));
  };

  const handleSelectGame = (game) => {
    dispatch(setSelectedGame(game));
  };

  useEffect(() => {
    const fetchGamesDetails = async () => {
      try {
        const data = await getGameDetails(query);
        dispatch(setResults(data.results));
      } catch (error) {
        console.error("Ошибка при поиске:", error);
      }
    };

    fetchGamesDetails();
  }, [query, dispatch]);

  const handleAddGame = () => {
    if (selectedGame && selectedStatus) {
      dispatch(
        addGame({
          id: selectedGame.id,
          name: selectedGame.name,
          image: selectedGame.background_image,
          status: selectedStatus,
        }),
      );
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-10">
          + добавить игру
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Добавьте игру</DialogTitle>
          <DialogDescription>Введите название игры и статус</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Название
            </Label>
            <Input
              id="name"
              value={query}
              className="col-span-3"
              placeholder="Введите название игры"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            {results.slice(0, 3).map((game) => (
              <div
                key={game.id}
                onClick={() => handleSelectGame(game)}
                className={cn(
                  "flex flex-row gap-4 w-full border rounded p-2 mt-2 cursor-pointer",
                  selectedGame?.id === game.id
                    ? "border-green-500 bg-green-50"
                    : "shadow-sm hover:bg-gray-50",
                )}
              >
                <div className="basis-1/3 h-[50px] overflow-hidden rounded">
                  <img src={game.background_image} alt={game.name} />
                </div>
                <div className="basis-2/3">
                  <p className="font-semibold">{game.name}</p>
                  <p className="text-sm text-muted-foreground">{game.released}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full">
            <Select onValueChange={(value) => dispatch(setSelectedStatus(value))}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="статус" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(STATUS_LABELS).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddGame}>
            добавить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
