import { Course } from "@prisma/client";
import { LoaderFunction, useLoaderData } from "remix";
import { AdminApi } from "~/features/Admin";
import { Courses } from "~/features/Admin/components/Courses";

interface LoaderData {
  courses: Course[];
}

export const loader: LoaderFunction = async ({ params }) => {
  return {
    courses: await AdminApi.getCourses(),
  };
};

export default function () {
  const { courses } = useLoaderData<LoaderData>();

  return <Courses courses={courses} />;
}

// export const ErrorBoundary = () => <h3>Whoops!</h3>;

// export const CatchBoundary = () => <h3>Not found!</h3>;
