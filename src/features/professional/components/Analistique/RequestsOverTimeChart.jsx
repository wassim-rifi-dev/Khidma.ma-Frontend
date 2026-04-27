import { useEffect, useRef } from "react";
import {
    CategoryScale,
    Chart,
    Filler,
    Legend,
    LineController,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, LineController, Filler, Tooltip, Legend);

export default function RequestsOverTimeChart({ chartData }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) {
            return undefined;
        }

        const chart = new Chart(canvasRef.current, {
            type: "line",
            data: {
                labels: chartData.labels,
                datasets: chartData.datasets.map((dataset) => ({
                    ...dataset,
                    pointBorderColor: "#ffffff",
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 5,
                    borderWidth: 3,
                    tension: 0.38,
                    fill: false,
                })),
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 8,
                    },
                },
                plugins: {
                    legend: {
                        position: "top",
                        align: "end",
                        labels: {
                            usePointStyle: true,
                            pointStyle: "circle",
                            boxWidth: 8,
                            boxHeight: 8,
                            color: "#57534e",
                            font: {
                                size: 13,
                                family: "Inter, system-ui, sans-serif",
                            },
                        },
                    },
                    tooltip: {
                        backgroundColor: "#111827",
                        titleColor: "#ffffff",
                        bodyColor: "#ffffff",
                        cornerRadius: 10,
                        displayColors: true,
                        padding: 12,
                    },
                },
                scales: {
                    x: {
                        border: {
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: "#57534e",
                            font: {
                                size: 13,
                                family: "Inter, system-ui, sans-serif",
                            },
                        },
                    },
                    y: {
                        min: 0,
                        max: 40,
                        ticks: {
                            stepSize: 10,
                            color: "#57534e",
                            font: {
                                size: 13,
                                family: "Inter, system-ui, sans-serif",
                            },
                        },
                        border: {
                            display: false,
                        },
                        grid: {
                            color: "#f1f5f9",
                        },
                    },
                },
            },
        });

        return () => chart.destroy();
    }, [chartData]);

    return (
        <section className="mt-6 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Requests Over Time</h2>
            <div className="mt-5 h-72">
                <canvas ref={canvasRef} />
            </div>
        </section>
    );
}

