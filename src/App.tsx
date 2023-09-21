import { useState } from "react";
import {
  Input,
  Button,
  Divider,
  Accordion,
  Flex,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { SearchResponse } from "./lib/api/types/search.types";
import { api } from "./lib/api";
import UserAccordionItem from "./components/UserAccordionItem";

function App() {
  const [username, setUsername] = useState("");
  const [searchValue, setSearchValue] = useState({ username: "" });

  const search = useQuery({
    queryKey: ["search", searchValue.username],
    queryFn: () =>
      api
        .get<SearchResponse>(
          `/search/users?q=${searchValue.username}&per_page=5`
        )
        .then((res) => res.data),
    enabled: !!searchValue.username.length,
  });

  const onSubmit: React.FormEventHandler<HTMLElement> | undefined = (e) => {
    e.preventDefault();
    setSearchValue({ username });
  };

  return (
    <>
      <main>
        <Box
          boxShadow="lg"
          bg={useColorModeValue("gray.100", "gray.900")}
          p={8}
          rounded="md"
        >
          <form onSubmit={onSubmit}>
            <Flex
              h={16}
              gap={5}
              alignItems="center"
              justifyContent="space-between"
            >
              <Input
                border="1px solid #dddd"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={search.isFetching}
              />
              <Button
                size="md"
                colorScheme="blue"
                bg={useColorModeValue("blue.300", "blue.900")}
                isLoading={search.isFetching}
                isDisabled={!username}
              >
                Search
              </Button>
            </Flex>
            <p className="ml-2 mt-2 text-xs font-medium text-slate-500">
              {!searchValue.username.length
                ? "No search"
                : `Showing users for "${searchValue.username}"`}
            </p>
          </form>
        </Box>

        <div className="h-4"></div>
        <Divider />
        <div className="h-4"></div>
        {!search.isFetching && !!search.data?.items && (
          <Accordion allowToggle>
            {search.data?.items?.map((item) => (
              <UserAccordionItem key={item.id} username={item.login} />
            ))}
          </Accordion>
        )}
      </main>
    </>
  );
}

export default App;
