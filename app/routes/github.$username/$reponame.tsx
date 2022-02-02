import { LoaderFunction, useLoaderData } from "remix";
import { GithubApi, Types } from "~/features/Github";
import { Commits } from "~/features/Github/components/Commits";

export const loader: LoaderFunction = async ({
  params,
}): Promise<Types.Commits.LoaderData> => {
  return {
    user: await GithubApi.getUser(params.username),
    commits: await GithubApi.getCommits(params.reponame, params.username),
  };
};

export function ErrorBoundary() {
  return (
    <div className="p-4 flex-1 space-y-1">
      <h3 className="text-sm font-medium text-yellow-400">
        Repository is empty
      </h3>
    </div>
  );
}

export default function () {
  const { user, commits } = useLoaderData<Types.Commits.LoaderData>();
  return <Commits user={user} commits={commits} />;
}
