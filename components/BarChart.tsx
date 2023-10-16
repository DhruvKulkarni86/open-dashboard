// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// } from "chart.js";

// let employeeLabel: any[] = [],
// 	employeeSalaryData: any[] = [],
// 	employeeAgeData: any[] = [];
"use client";
// async function getData() {
// 	const apiUrl = "https://dummy.restapiexample.com/api/v1/employees";

// 	const response = await fetch(apiUrl);
// 	const barChatData = await response.json();
// 	console.log("BD", barChatData);
// 	return barChatData;
// }

// ChartJS.register(
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend
// );

// export const options = {
// 	plugins: {
// 		legend: {
// 			position: "top",
// 		},
// 		title: {
// 			display: true,
// 			text: "Daily Revenue",
// 		},
// 	},
// 	maintainAspectRatio: false,
// 	responsive: true,
// };

// // const labels = ["January", "February", "March", "April", "May", "June", "July"];
// export const data = {
// 	labels: employeeLabel,
// 	datasets: [
// 		{
// 			label: "Employee Salary",
// 			data: employeeSalaryData,
// 			backgroundColor: "rgba(255, 99, 132, 0.5)",
// 		},
// 		{
// 			label: "Employee Age",
// 			data: employeeAgeData,
// 			backgroundColor: "rgba(53, 162, 235, 0.5)",
// 		},
// 	],
// };

// export default async function BarChart() {
// 	const data = await getData();
// 	console.log("DATA", data);
// 	const salary = data.data.map((x: any) => x.employee_salary);
// 	const age = data.data.map((x: any) => x.employee_age);
// 	const name = data.data.map((x: any) => x.employee_name);

// 	employeeSalaryData = salary;
// 	employeeAgeData = age;
// 	employeeLabel = name;
// 	return (
// 		<>
// 			<div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
// 				<Bar data={data} options={options} />
// 			</div>
// 		</>
// 	);
// }

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
export const BarChart: React.FC<{}> = () => {
	// const dataa = await getData();
	// console.log("DATA", dataa);

	const labels = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
	];
	const [data, setData] = useState({
		labels: labels,
		datasets: [
			{
				label: "Expenses by Month",
				data: [65, 59, 80, 81, 56, 55, 40],
				backgroundColor: ["rgb(153, 102, 255)"],
				borderColor: ["rgb(153, 102, 255)"],
				borderWidth: 1,
			},
		],
	});

	return <Bar data={data} />;
};
