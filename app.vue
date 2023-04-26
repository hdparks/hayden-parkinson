<template>
  <div
    class="flex h-full w-screen flex-col justify-center justify-items-center bg-white text-slate-500 dark:bg-slate-800"
  >
    <div
      class="relative mx-auto flex flex-col gap-2 rounded-xl border-2 border-slate-300 bg-slate-200 p-3 dark:border-slate-600 dark:bg-slate-700"
      :style="{
        height:
          data[data.length - 1].date.diff(data[0].date, 'days') * 1.3 + 'px',
      }"
    >
      <p
        class="relative"
        v-for="point in data"
        :style="{
          transform: `translate(0,${point.date.diff(firstDate, 'days')}px)`,
        }"
      >
        {{ point.date.format("MMM 'YY") }}: {{ point.note }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs, { Dayjs } from "dayjs";
const data: { date: Dayjs; note: string }[] = [
  {
    date: dayjs("2017-09-01"),
    note: "Failed my first coding interview, got my first Quality Assurance job",
  },
  {
    date: dayjs("2018-09-10"),
    note: "Parsed my first .csv in Python using pandas",
  },
  {
    date: dayjs("2019-02-14"),
    note: "Built my first Angular app",
  },
  {
    date: dayjs("2019-08-20"),
    note: "First commit to Athlos Special Education Logs (Mobile App)",
  },
  {
    date: dayjs("2019-08-21"),
    note: "Teacher's Assistant for Intro to Machine Learning (CS 472)",
  },
  {
    date: dayjs("2020-04-30"),
    note: "Started full-time with Athlos",
  },
];

const firstDate = data[0].date;
</script>
