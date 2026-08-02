import { useContext } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import goalsData from "../data/goals.json";
import Layout, { cx } from "../components/Layout";
import { ThemeContext } from "../context/theme";

export default function Goals(): JSX.Element {
  const { light } = useContext(ThemeContext);
  const goals: string[] = goalsData.filter((goal) => !/^Thing \d+$/.test(goal));
  const completedCount = goals.filter((goal) => goal.includes("done:")).length;

  return (
    <Layout
      title="100 Goals - Adam Nguyen"
      description="Adam Nguyen's personal list of goals across study, travel, fitness, family, craft, and values."
    >
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">List 100</p>
          <h1 className="mt-3 text-5xl font-semibold leading-tight tracking-normal">A public ledger for ambition and values.</h1>
          <p className={cx("mt-5 text-lg leading-8", light ? "text-zinc-700" : "text-slate-300")}>
            Goals I want to earn across work, study, family, travel, fitness, craft, and faith. The last one
            is the rule that governs the rest: achieve the list without sacrificing my values along the way.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className={cx("rounded-lg border p-5", light ? "border-zinc-200 bg-white" : "border-white/10 bg-white/[0.04]")}>
            <p className="text-3xl font-semibold text-emerald-500">{goals.length}</p>
            <p className={cx("mt-2 text-sm", light ? "text-zinc-600" : "text-slate-400")}>published goals</p>
          </div>
          <div className={cx("rounded-lg border p-5", light ? "border-zinc-200 bg-white" : "border-white/10 bg-white/[0.04]")}>
            <p className="text-3xl font-semibold text-emerald-500">{completedCount}</p>
            <p className={cx("mt-2 text-sm", light ? "text-zinc-600" : "text-slate-400")}>already completed</p>
          </div>
          <div className={cx("rounded-lg border p-5", light ? "border-zinc-200 bg-white" : "border-white/10 bg-white/[0.04]")}>
            <p className="text-3xl font-semibold text-emerald-500">1</p>
            <p className={cx("mt-2 text-sm", light ? "text-zinc-600" : "text-slate-400")}>non-negotiable value rule</p>
          </div>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {goals.map((goal, index) => {
            const completed = goal.includes("done:");
            const cleanGoal = goal.replace("done:", "").trim();

            return (
              <li
                key={`${goal}-${index}`}
                className={cx(
                  "grid grid-cols-[2rem_1fr] gap-3 rounded-lg border p-4",
                  light ? "border-zinc-200 bg-white" : "border-white/10 bg-white/[0.04]"
                )}
              >
                <div className="pt-0.5 text-emerald-500">
                  {completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                </div>
                <div>
                  <p className={cx("text-xs", light ? "text-zinc-500" : "text-slate-500")}>
                    {(index + 1).toString().padStart(2, "0")}
                  </p>
                  <p className={cx("mt-1 text-sm leading-6", completed && "line-through opacity-70")}>{cleanGoal}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </Layout>
  );
}
