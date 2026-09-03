import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import goalsData from "../data/goals.json";
import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";

type GoalStatus = "Completed" | "In progress" | "Not started";

function normaliseGoal(
  goal: string,
): { text: string; status: GoalStatus } | null {
  if (/^Thing \d+$/.test(goal)) return null;

  if (goal.startsWith("done:")) {
    return { text: goal.replace("done:", "").trim(), status: "Completed" };
  }

  if (goal.startsWith("progress:")) {
    return {
      text: goal.replace("progress:", "").trim(),
      status: "In progress",
    };
  }

  return { text: goal, status: "Not started" };
}

const statusIcon = {
  Completed: CheckCircle2,
  "In progress": Loader2,
  "Not started": Circle,
};

export default function Goals(): JSX.Element {
  const goals = goalsData
    .map(normaliseGoal)
    .filter((goal): goal is NonNullable<typeof goal> => Boolean(goal));
  const completedCount = goals.filter(
    (goal) => goal.status === "Completed",
  ).length;

  return (
    <Layout
      title="Life List"
      description="Adam Nguyen's growing life list of experiences, milestones and challenges."
    >
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Life List"
          title="A growing list of experiences, milestones and challenges."
          description="I aim to achieve everything in the list and do not sacrifice my values along the way. Never miss moments that matter."
        />

        <div className="mt-8 grid gap-6 border-y border-white/10 py-6 sm:grid-cols-3">
          <Stat
            value={goals.length.toString()}
            label="real entries published"
          />
          <Stat value={completedCount.toString()} label="completed" />
          <Stat value="1" label="values rule at the end" />
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
          {goals.map((goal, index) => {
            const Icon = statusIcon[goal.status];
            return (
              <li
                key={`${goal.text}-${index}`}
                className="grid grid-cols-[2.25rem_1fr] gap-3 border-t border-white/10 py-4"
              >
                <div className="pt-0.5 text-emerald-300">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">
                    {(index + 1).toString().padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">
                    {goal.text}
                  </p>
                  <p className="mt-2 text-xs font-medium text-slate-400">
                    <span className="sr-only">Status: </span>
                    {goal.status}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </Layout>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}
