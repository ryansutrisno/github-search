import { useRef } from "react";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar,
  CircularProgress,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api";
import { GetUserResponse } from "../../lib/api/types/user.types";
import { GetReposResponse } from "../../lib/api/types/repos.types";

type UserProps = {
  username: string;
};

const UserAccordionItem = ({ username }: UserProps) => {
  const refButton = useRef(null);
  const user = useQuery({
    queryKey: ["user", username],
    queryFn: async () =>
      api
        .get<GetUserResponse>(`https://api.github.com/users/${username}`)
        .then((res) => res.data),
  });
  return (
    <>
      <AccordionItem>
        <AccordionButton ref={refButton}>
          <Box as="span" flex="1" textAlign="left">
            {!user.isFetching && (
              <>
                <div className="flex items-center gap-5">
                  <Avatar src={user.data?.avatar_url ?? ""} />
                  <div className="flex flex-col items-start">
                    <h2 className="line-clamp-1 text-left text-sm font-normal text-slate-700 md:text-base">
                      {user.data?.name ?? "-"}
                    </h2>
                    <p className="text-left text-[10px] font-semibold text-slate-500 md:text-xs">
                      {user.data?.login}
                    </p>
                  </div>
                </div>
              </>
            )}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <AccordionContent username={username} />
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};
export default UserAccordionItem;

type AccordionContentProps = {
  username: string;
};

const AccordionContent = ({ username }: AccordionContentProps) => {
  const repos = useQuery({
    queryKey: ["repos", username],
    queryFn: async () =>
      api
        .get<GetReposResponse>(`https://api.github.com/users/${username}/repos`)
        .then((res) => res.data),
  });
  return (
    <div className="p-[15px_10px_15px_15px]">
      {repos.isLoading && <CircularProgress />}
      {!repos.isLoading && !repos.data?.length && (
        <div className="flex min-h-[100px] w-full items-center justify-center">
          <p className="text-sm font-semibold text-slate-600">
            No Repositories..
          </p>
        </div>
      )}
      {!repos.isLoading && (
        <div className="grid max-h-[300px] grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[10px] overflow-auto pr-[10px]">
          {repos.data?.map((repo) => (
            <div
              key={repo.id}
              className="min-h-[100px] rounded-[4px] border-[1px] border-slate-300 p-[10px] hover:border-blue-300"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-slate-600">
                    {repo.name}
                  </h2>
                  <p className="line-clamp-3 text-xs font-normal text-slate-600">
                    {repo.description ?? "-"}
                  </p>
                </div>
                <div className="flex h-fit items-center justify-center gap-[3px]">
                  {repo.stargazers_count > 0 && (
                    <>
                      <p className="text-[12px] font-semibold text-slate-500">
                        {repo.stargazers_count}
                      </p>
                      <StarIcon color={"yellow.500"} />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
