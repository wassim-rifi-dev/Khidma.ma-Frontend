import { useEffect, useRef } from "react";
import { ArcElement, Chart, DoughnutController, Tooltip } from "chart.js";

Chart.register(ArcElement, DoughnutController, Tooltip);

export default function RequestsStatusChart({ items, total }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) {
            return undefined;
        }

        const chart = new Chart(canvasRef.current, {
            type: "doughnut",
            data: {
                labels: items.map((item) => item.label),
                datasets: [
                    {
                        data: items.map((item) => item.value),
                        backgroundColor: items.map((item) => item.color),
                        borderWidth: 0,
                        hoverOffset: 3,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: "82%",
                plugins: {
                    tooltip: {
                        backgroundColor: "#111827",
                        titleColor: "#ffffff",
                        bodyColor: "#ffffff",
                        cornerRadius: 10,
                        padding: 12,
                    },
                    legend: {
                        display: false
                    }
                },
            },
            plugins: [
                {
                    id: "centerText",
                    afterDraw(chartInstance) {
                        const { ctx, chartArea } = chartInstance;
                        const centerX = (chartArea.left + chartArea.right) / 2;
                        const centerY = (chartArea.top + chartArea.bottom) / 2;

                        ctx.save();
                        ctx.textAlign = "center";
                        ctx.fillStyle = "#1f2937";
                        ctx.font = "700 34px Inter, system-ui, sans-serif";
                        ctx.fillText(total, centerX, centerY - 2);
                        ctx.fillStyle = "#57534e";
                        ctx.font = "500 15px Inter, system-ui, sans-serif";
                        ctx.fillText("Total", centerX, centerY + 24);
                        ctx.restore();
                    },
                },
            ],
        });

        return () => chart.destroy();
    }, [items, total]);

    return (
        <section className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Requests Status</h2>

            <div className="mx-auto mt-6 h-64 w-64">
                <canvas ref={canvasRef} />
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {items.map((item) => (
                    <div key={item.label} className="flex items-center gap-2 text-base font-medium text-stone-600">
                        <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: item.color }} />
                        <span>
                            {item.label} ({item.value}%)
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

