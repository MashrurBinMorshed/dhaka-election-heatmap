module.exports = [
"[project]/components/hexagon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hexagon",
    ()=>Hexagon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const heatColors = [
    {
        fill: "#fef3e2",
        stroke: "#fcd9a8",
        hover: "#fde9cc"
    },
    {
        fill: "#fcd9a8",
        stroke: "#f9b866",
        hover: "#fce5c4"
    },
    {
        fill: "#f9b866",
        stroke: "#f97316",
        hover: "#facb8a"
    },
    {
        fill: "#f97316",
        stroke: "#ea580c",
        hover: "#fb923c"
    },
    {
        fill: "#c2410c",
        stroke: "#9a3412",
        hover: "#ea580c"
    }
];
function Hexagon({ constituency, x, y, size, onClick, isSelected }) {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const heatIndex = (constituency.seatNumber - 1) % heatColors.length;
    const colors = heatColors[heatIndex];
    // Calculate hexagon points
    const points = Array.from({
        length: 6
    }, (_, i)=>{
        const angle = Math.PI / 3 * i - Math.PI / 6;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        return `${px},${py}`;
    }).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        onClick: onClick,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: "cursor-pointer transition-all duration-200",
        style: {
            transform: isHovered || isSelected ? "scale(1.08)" : "scale(1)",
            transformOrigin: `${x}px ${y}px`
        },
        children: [
            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: points,
                fill: "none",
                stroke: "#f97316",
                strokeWidth: "4",
                opacity: "0.6",
                className: "animate-pulse"
            }, void 0, false, {
                fileName: "[project]/components/hexagon.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: points,
                fill: isHovered || isSelected ? colors.hover : colors.fill,
                stroke: isHovered || isSelected ? "#f97316" : colors.stroke,
                strokeWidth: "2",
                className: "transition-all duration-200",
                style: {
                    filter: isHovered || isSelected ? "drop-shadow(0 4px 12px rgba(249,115,22,0.3))" : "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                }
            }, void 0, false, {
                fileName: "[project]/components/hexagon.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x,
                y: y - 6,
                textAnchor: "middle",
                dominantBaseline: "middle",
                fill: heatIndex >= 3 ? "#fff" : "#1f2937",
                fontSize: "20",
                fontWeight: "bold",
                className: "pointer-events-none select-none",
                children: constituency.seatNumber
            }, void 0, false, {
                fileName: "[project]/components/hexagon.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x,
                y: y + 12,
                textAnchor: "middle",
                dominantBaseline: "middle",
                fill: heatIndex >= 3 ? "rgba(255,255,255,0.9)" : "rgba(31,41,55,0.8)",
                fontSize: "11",
                className: "pointer-events-none select-none",
                children: constituency.shortName
            }, void 0, false, {
                fileName: "[project]/components/hexagon.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hexagon.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/hexagon-grid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexagonGrid",
    ()=>HexagonGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hexagon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hexagon.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function HexagonGrid({ constituencies, onHexagonClick, selectedId }) {
    // Arrange hexagons in a pattern resembling Dhaka's shape
    // Dynamic size based on screen width
    const isMobile = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth < 768;
    const hexSize = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 50;
    const hexWidth = hexSize * 2;
    const hexHeight = Math.sqrt(3) * hexSize;
    // Grid positions for 20 hexagons arranged in a Dhaka-like pattern
    const gridPositions = [
        // Row 1 (top)
        {
            row: 0,
            col: 1
        },
        {
            row: 0,
            col: 2
        },
        // Row 2
        {
            row: 1,
            col: 0
        },
        {
            row: 1,
            col: 1
        },
        {
            row: 1,
            col: 2
        },
        {
            row: 1,
            col: 3
        },
        // Row 3
        {
            row: 2,
            col: 0
        },
        {
            row: 2,
            col: 1
        },
        {
            row: 2,
            col: 2
        },
        {
            row: 2,
            col: 3
        },
        // Row 4
        {
            row: 3,
            col: 0
        },
        {
            row: 3,
            col: 1
        },
        {
            row: 3,
            col: 2
        },
        {
            row: 3,
            col: 3
        },
        // Row 5
        {
            row: 4,
            col: 1
        },
        {
            row: 4,
            col: 2
        },
        {
            row: 4,
            col: 3
        },
        // Row 6 (bottom)
        {
            row: 5,
            col: 1
        },
        {
            row: 5,
            col: 2
        },
        {
            row: 5,
            col: 3
        }
    ];
    const getHexPosition = (index)=>{
        const pos = gridPositions[index];
        const xOffset = pos.row % 2 === 0 ? hexWidth * 0.75 : 0;
        const x = pos.col * hexWidth * 1.5 + xOffset + 60;
        const y = pos.row * hexHeight * 0.87;
        return {
            x,
            y
        };
    };
    // Calculate grid dimensions
    const maxCol = Math.max(...gridPositions.map((p)=>p.col));
    const maxRow = Math.max(...gridPositions.map((p)=>p.row));
    const gridWidth = (maxCol + 2) * hexWidth * 1.5;
    const gridHeight = (maxRow + 1) * hexHeight;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: gridWidth,
        height: gridHeight + 40,
        viewBox: `-10 -10 ${gridWidth + 20} ${gridHeight + 60}`,
        className: "max-w-full h-auto",
        children: constituencies.map((constituency, index)=>{
            const { x, y } = getHexPosition(index);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hexagon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hexagon"], {
                constituency: constituency,
                x: x + hexSize,
                y: y + hexSize,
                size: hexSize,
                onClick: ()=>onHexagonClick(constituency),
                isSelected: selectedId === constituency.id
            }, constituency.id, false, {
                fileName: "[project]/components/hexagon-grid.tsx",
                lineNumber: 76,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/hexagon-grid.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/separator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Separator({ className, orientation = 'horizontal', decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/candidate-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CandidatePanel",
    ()=>CandidatePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const partyNames = {
    green: "Green Party",
    red: "Red Party",
    blue: "Blue Party",
    orange: "Orange Party",
    independent: "Independent"
};
const partyLogos = {
    green: "/green-leaf-party-logo.jpg",
    red: "/red-rose-party-logo.jpg",
    blue: "/blue-star-party-logo.jpg",
    orange: "/orange-sun-party-logo.jpg",
    independent: "/neutral-independent-candidate-logo.jpg"
};
function CandidatePanel({ constituency, isOpen, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black/30 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/candidate-panel.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed right-0 top-0 h-full w-full sm:w-[400px] lg:w-[420px] bg-white border-l border-border shadow-xl z-50 overflow-y-auto transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`,
                children: constituency && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-in fade-in slide-in-from-right-4 duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-white/95 backdrop-blur-sm border-b border-border p-4 lg:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium uppercase tracking-wider text-orange-500 mb-1",
                                                children: "Constituency"
                                            }, void 0, false, {
                                                fileName: "[project]/components/candidate-panel.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl lg:text-2xl font-bold text-gray-900",
                                                children: constituency.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/candidate-panel.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-4 h-4 text-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/candidate-panel.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            "Seat #",
                                                            constituency.seatNumber
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/candidate-panel.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/candidate-panel.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/candidate-panel.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: onClose,
                                        className: "text-gray-500 hover:text-gray-900 hover:bg-orange-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/candidate-panel.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/candidate-panel.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/candidate-panel.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/candidate-panel.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 lg:p-6 space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-in fade-in slide-in-from-bottom-2 duration-300 delay-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-5 h-5 text-orange-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/candidate-panel.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900",
                                                children: "Candidates"
                                            }, void 0, false, {
                                                fileName: "[project]/components/candidate-panel.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/candidate-panel.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: constituency.candidates.map((candidate, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-orange-300 hover:bg-orange-50/50 transition-all duration-200 animate-in fade-in slide-in-from-right-2",
                                                style: {
                                                    animationDelay: `${(index + 1) * 100}ms`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 ring-2 ring-orange-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: candidate.photo || "/placeholder.svg",
                                                                    alt: candidate.name,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/candidate-panel.tsx",
                                                                    lineNumber: 91,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/candidate-panel.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-bold text-lg text-gray-900",
                                                                        children: candidate.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/candidate-panel.tsx",
                                                                        lineNumber: 100,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500 mt-1",
                                                                        children: "Candidate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/candidate-panel.tsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/candidate-panel.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/candidate-panel.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
                                                        className: "my-4 bg-gray-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/candidate-panel.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-12 h-12 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: partyLogos[candidate.party] || "/placeholder.svg",
                                                                    alt: partyNames[candidate.party],
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/candidate-panel.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/candidate-panel.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 uppercase tracking-wider",
                                                                        children: "Party"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/candidate-panel.tsx",
                                                                        lineNumber: 120,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900",
                                                                        children: partyNames[candidate.party]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/candidate-panel.tsx",
                                                                        lineNumber: 121,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/candidate-panel.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/candidate-panel.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, candidate.id, true, {
                                                fileName: "[project]/components/candidate-panel.tsx",
                                                lineNumber: 82,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/candidate-panel.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/candidate-panel.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/candidate-panel.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/candidate-panel.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/candidate-panel.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/legend.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Legend",
    ()=>Legend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Legend() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1"
    }, void 0, false, {
        fileName: "[project]/components/legend.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/election-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constituencies",
    ()=>constituencies
]);
const constituencies = [
    {
        id: 1,
        seatNumber: 1,
        name: "Dhaka-1 (Tejgaon)",
        shortName: "Tejgaon",
        leadingParty: "green",
        winner: {
            id: 1,
            name: "Mohammad Rahman",
            party: "green",
            votes: 85420,
            percentage: 48.2,
            photo: "/professional-bangladeshi-man-portrait-1.jpg"
        },
        candidates: [
            {
                id: 1,
                name: "Mohammad Rahman",
                party: "green",
                votes: 85420,
                percentage: 48.2,
                photo: "/professional-bangladeshi-man-portrait-1.jpg"
            },
            {
                id: 2,
                name: "Fatima Begum",
                party: "red",
                votes: 52340,
                percentage: 29.5,
                photo: "/professional-bangladeshi-woman-portrait-1.jpg"
            },
            {
                id: 3,
                name: "Abdul Karim",
                party: "blue",
                votes: 28900,
                percentage: 16.3,
                photo: "/professional-bangladeshi-man-portrait-2.jpg"
            },
            {
                id: 4,
                name: "Rashida Khan",
                party: "independent",
                votes: 10640,
                percentage: 6.0,
                photo: "/professional-bangladeshi-woman-portrait-2.jpg"
            }
        ],
        totalVoters: 245000,
        turnout: 72.3,
        margin: 33080
    },
    {
        id: 2,
        seatNumber: 2,
        name: "Dhaka-2 (Mirpur)",
        shortName: "Mirpur",
        leadingParty: "red",
        winner: {
            id: 5,
            name: "Salma Akhter",
            party: "red",
            votes: 92150,
            percentage: 51.8,
            photo: "/professional-bangladeshi-woman-portrait-3.jpg"
        },
        candidates: [
            {
                id: 5,
                name: "Salma Akhter",
                party: "red",
                votes: 92150,
                percentage: 51.8,
                photo: "/professional-bangladeshi-woman-portrait-3.jpg"
            },
            {
                id: 6,
                name: "Kamal Hossain",
                party: "green",
                votes: 68420,
                percentage: 38.5,
                photo: "/professional-bangladeshi-man-portrait-3.jpg"
            },
            {
                id: 7,
                name: "Nasir Ahmed",
                party: "independent",
                votes: 17230,
                percentage: 9.7,
                photo: "/professional-bangladeshi-man-portrait-4.jpg"
            }
        ],
        totalVoters: 268000,
        turnout: 66.4,
        margin: 23730
    },
    {
        id: 3,
        seatNumber: 3,
        name: "Dhaka-3 (Uttara)",
        shortName: "Uttara",
        leadingParty: "green",
        winner: {
            id: 8,
            name: "Aminul Islam",
            party: "green",
            votes: 78900,
            percentage: 45.6,
            photo: "/professional-bangladeshi-man-portrait-5.jpg"
        },
        candidates: [
            {
                id: 8,
                name: "Aminul Islam",
                party: "green",
                votes: 78900,
                percentage: 45.6,
                photo: "/professional-bangladeshi-man-portrait-5.jpg"
            },
            {
                id: 9,
                name: "Rahima Sultana",
                party: "blue",
                votes: 56780,
                percentage: 32.8,
                photo: "/professional-bangladeshi-woman-portrait-4.jpg"
            },
            {
                id: 10,
                name: "Jamal Uddin",
                party: "red",
                votes: 37420,
                percentage: 21.6,
                photo: "/professional-bangladeshi-man-portrait-6.jpg"
            }
        ],
        totalVoters: 232000,
        turnout: 74.6,
        margin: 22120
    },
    {
        id: 4,
        seatNumber: 4,
        name: "Dhaka-4 (Motijheel)",
        shortName: "Motijheel",
        leadingParty: "blue",
        winner: {
            id: 11,
            name: "Shafiq Ahmed",
            party: "blue",
            votes: 71230,
            percentage: 43.2,
            photo: "/professional-bangladeshi-man-portrait-7.jpg"
        },
        candidates: [
            {
                id: 11,
                name: "Shafiq Ahmed",
                party: "blue",
                votes: 71230,
                percentage: 43.2,
                photo: "/professional-bangladeshi-man-portrait-7.jpg"
            },
            {
                id: 12,
                name: "Nasreen Jahan",
                party: "green",
                votes: 54670,
                percentage: 33.2,
                photo: "/professional-bangladeshi-woman-portrait-5.jpg"
            },
            {
                id: 13,
                name: "Rafiq Hassan",
                party: "red",
                votes: 38900,
                percentage: 23.6,
                photo: "/professional-bangladeshi-man-portrait-8.jpg"
            }
        ],
        totalVoters: 215000,
        turnout: 76.7,
        margin: 16560
    },
    {
        id: 5,
        seatNumber: 5,
        name: "Dhaka-5 (Gulshan)",
        shortName: "Gulshan",
        leadingParty: "green",
        winner: {
            id: 14,
            name: "Tahmina Alam",
            party: "green",
            votes: 95420,
            percentage: 52.3,
            photo: "/professional-bangladeshi-woman-portrait-6.jpg"
        },
        candidates: [
            {
                id: 14,
                name: "Tahmina Alam",
                party: "green",
                votes: 95420,
                percentage: 52.3,
                photo: "/professional-bangladeshi-woman-portrait-6.jpg"
            },
            {
                id: 15,
                name: "Farhan Ali",
                party: "red",
                votes: 58340,
                percentage: 32.0,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 16,
                name: "Sumon Chowdhury",
                party: "blue",
                votes: 28640,
                percentage: 15.7,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 278000,
        turnout: 65.6,
        margin: 37080
    },
    {
        id: 6,
        seatNumber: 6,
        name: "Dhaka-6 (Banani)",
        shortName: "Banani",
        leadingParty: "red",
        winner: {
            id: 17,
            name: "Mahmud Hasan",
            party: "red",
            votes: 67890,
            percentage: 44.8,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 17,
                name: "Mahmud Hasan",
                party: "red",
                votes: 67890,
                percentage: 44.8,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 18,
                name: "Shapla Khatun",
                party: "green",
                votes: 52340,
                percentage: 34.5,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 19,
                name: "Imran Khan",
                party: "blue",
                votes: 31370,
                percentage: 20.7,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 198000,
        turnout: 76.5,
        margin: 15550
    },
    {
        id: 7,
        seatNumber: 7,
        name: "Dhaka-7 (Dhanmondi)",
        shortName: "Dhanmondi",
        leadingParty: "green",
        winner: {
            id: 20,
            name: "Nusrat Jahan",
            party: "green",
            votes: 88760,
            percentage: 49.2,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 20,
                name: "Nusrat Jahan",
                party: "green",
                votes: 88760,
                percentage: 49.2,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 21,
                name: "Rahim Mia",
                party: "red",
                votes: 56890,
                percentage: 31.5,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 22,
                name: "Sakib Rahman",
                party: "independent",
                votes: 34850,
                percentage: 19.3,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 245000,
        turnout: 73.7,
        margin: 31870
    },
    {
        id: 8,
        seatNumber: 8,
        name: "Dhaka-8 (Mohammadpur)",
        shortName: "M.pur",
        leadingParty: "red",
        winner: {
            id: 23,
            name: "Kabir Hossain",
            party: "red",
            votes: 74560,
            percentage: 46.5,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 23,
                name: "Kabir Hossain",
                party: "red",
                votes: 74560,
                percentage: 46.5,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 24,
                name: "Aisha Siddiqua",
                party: "green",
                votes: 58340,
                percentage: 36.4,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 25,
                name: "Tanvir Ahmed",
                party: "blue",
                votes: 27400,
                percentage: 17.1,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 218000,
        turnout: 73.5,
        margin: 16220
    },
    {
        id: 9,
        seatNumber: 9,
        name: "Dhaka-9 (Lalbagh)",
        shortName: "Lalbagh",
        leadingParty: "green",
        winner: {
            id: 26,
            name: "Selim Reza",
            party: "green",
            votes: 69870,
            percentage: 47.8,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 26,
                name: "Selim Reza",
                party: "green",
                votes: 69870,
                percentage: 47.8,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 27,
                name: "Monira Begum",
                party: "red",
                votes: 48960,
                percentage: 33.5,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 28,
                name: "Ashraf Uddin",
                party: "blue",
                votes: 27370,
                percentage: 18.7,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 195000,
        turnout: 75.0,
        margin: 20910
    },
    {
        id: 10,
        seatNumber: 10,
        name: "Dhaka-10 (Hazaribagh)",
        shortName: "H.bagh",
        leadingParty: "blue",
        winner: {
            id: 29,
            name: "Zahir Raihan",
            party: "blue",
            votes: 62450,
            percentage: 44.2,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 29,
                name: "Zahir Raihan",
                party: "blue",
                votes: 62450,
                percentage: 44.2,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 30,
                name: "Rokia Sultana",
                party: "green",
                votes: 48760,
                percentage: 34.5,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 31,
                name: "Masud Rana",
                party: "red",
                votes: 30090,
                percentage: 21.3,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 187000,
        turnout: 75.5,
        margin: 13690
    },
    {
        id: 11,
        seatNumber: 11,
        name: "Dhaka-11 (Kamrangirchar)",
        shortName: "K.char",
        leadingParty: "red",
        winner: {
            id: 32,
            name: "Nazma Akter",
            party: "red",
            votes: 58970,
            percentage: 43.6,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 32,
                name: "Nazma Akter",
                party: "red",
                votes: 58970,
                percentage: 43.6,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 33,
                name: "Habib Rahman",
                party: "green",
                votes: 47650,
                percentage: 35.2,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 34,
                name: "Shahin Mia",
                party: "independent",
                votes: 28680,
                percentage: 21.2,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 178000,
        turnout: 76.0,
        margin: 11320
    },
    {
        id: 12,
        seatNumber: 12,
        name: "Dhaka-12 (Kotwali)",
        shortName: "Kotwali",
        leadingParty: "green",
        winner: {
            id: 35,
            name: "Jahanara Imam",
            party: "green",
            votes: 72340,
            percentage: 48.5,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 35,
                name: "Jahanara Imam",
                party: "green",
                votes: 72340,
                percentage: 48.5,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 36,
                name: "Badrul Alam",
                party: "red",
                votes: 52890,
                percentage: 35.5,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 37,
                name: "Salim Uddin",
                party: "blue",
                votes: 23870,
                percentage: 16.0,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 203000,
        turnout: 73.5,
        margin: 19450
    },
    {
        id: 13,
        seatNumber: 13,
        name: "Dhaka-13 (Sutrapur)",
        shortName: "Sutrapur",
        leadingParty: "blue",
        winner: {
            id: 38,
            name: "Anwar Hossain",
            party: "blue",
            votes: 65780,
            percentage: 45.3,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 38,
                name: "Anwar Hossain",
                party: "blue",
                votes: 65780,
                percentage: 45.3,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 39,
                name: "Kulsum Begum",
                party: "green",
                votes: 48920,
                percentage: 33.7,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 40,
                name: "Faisal Khan",
                party: "red",
                votes: 30500,
                percentage: 21.0,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 192000,
        turnout: 75.7,
        margin: 16860
    },
    {
        id: 14,
        seatNumber: 14,
        name: "Dhaka-14 (Sabujbagh)",
        shortName: "S.bagh",
        leadingParty: "red",
        winner: {
            id: 41,
            name: "Hasina Khatun",
            party: "red",
            votes: 71450,
            percentage: 46.8,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 41,
                name: "Hasina Khatun",
                party: "red",
                votes: 71450,
                percentage: 46.8,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 42,
                name: "Rubel Ahmed",
                party: "green",
                votes: 54670,
                percentage: 35.8,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 43,
                name: "Kawsar Ali",
                party: "blue",
                votes: 26580,
                percentage: 17.4,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 208000,
        turnout: 73.5,
        margin: 16780
    },
    {
        id: 15,
        seatNumber: 15,
        name: "Dhaka-15 (Ramna)",
        shortName: "Ramna",
        leadingParty: "green",
        winner: {
            id: 44,
            name: "Shamsul Haque",
            party: "green",
            votes: 82340,
            percentage: 50.2,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 44,
                name: "Shamsul Haque",
                party: "green",
                votes: 82340,
                percentage: 50.2,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 45,
                name: "Ruma Akter",
                party: "red",
                votes: 56780,
                percentage: 34.6,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 46,
                name: "Motin Sarker",
                party: "independent",
                votes: 24880,
                percentage: 15.2,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 225000,
        turnout: 72.9,
        margin: 25560
    },
    {
        id: 16,
        seatNumber: 16,
        name: "Dhaka-16 (Pallabi)",
        shortName: "Pallabi",
        leadingParty: "independent",
        winner: {
            id: 47,
            name: "Iqbal Hussain",
            party: "independent",
            votes: 58670,
            percentage: 42.5,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 47,
                name: "Iqbal Hussain",
                party: "independent",
                votes: 58670,
                percentage: 42.5,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 48,
                name: "Sharmin Jahan",
                party: "green",
                votes: 45890,
                percentage: 33.2,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 49,
                name: "Zahid Hasan",
                party: "red",
                votes: 33540,
                percentage: 24.3,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 185000,
        turnout: 74.6,
        margin: 12780
    },
    {
        id: 17,
        seatNumber: 17,
        name: "Dhaka-17 (Turag)",
        shortName: "Turag",
        leadingParty: "blue",
        winner: {
            id: 50,
            name: "Mamun Rashid",
            party: "blue",
            votes: 69450,
            percentage: 47.2,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 50,
                name: "Mamun Rashid",
                party: "blue",
                votes: 69450,
                percentage: 47.2,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 51,
                name: "Bilkis Banu",
                party: "green",
                votes: 52340,
                percentage: 35.6,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 52,
                name: "Arif Mahmud",
                party: "red",
                votes: 25310,
                percentage: 17.2,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 198000,
        turnout: 74.4,
        margin: 17110
    },
    {
        id: 18,
        seatNumber: 18,
        name: "Dhaka-18 (Khilkhet)",
        shortName: "Khilkhet",
        leadingParty: "green",
        winner: {
            id: 53,
            name: "Farida Yasmin",
            party: "green",
            votes: 76890,
            percentage: 49.5,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 53,
                name: "Farida Yasmin",
                party: "green",
                votes: 76890,
                percentage: 49.5,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 54,
                name: "Shakil Ahmed",
                party: "red",
                votes: 48670,
                percentage: 31.3,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 55,
                name: "Rony Mia",
                party: "blue",
                votes: 29840,
                percentage: 19.2,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 212000,
        turnout: 73.3,
        margin: 28220
    },
    {
        id: 19,
        seatNumber: 19,
        name: "Dhaka-19 (Vatara)",
        shortName: "Vatara",
        leadingParty: "red",
        winner: {
            id: 56,
            name: "Mostafa Kamal",
            party: "red",
            votes: 68940,
            percentage: 45.8,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 56,
                name: "Mostafa Kamal",
                party: "red",
                votes: 68940,
                percentage: 45.8,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 57,
                name: "Lipi Rahman",
                party: "green",
                votes: 54230,
                percentage: 36.0,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 58,
                name: "Rubel Khan",
                party: "independent",
                votes: 27330,
                percentage: 18.2,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 205000,
        turnout: 73.4,
        margin: 14710
    },
    {
        id: 20,
        seatNumber: 20,
        name: "Dhaka-20 (Dakshinkhan)",
        shortName: "D.khan",
        leadingParty: "independent",
        winner: {
            id: 59,
            name: "Liton Mia",
            party: "independent",
            votes: 55670,
            percentage: 41.2,
            photo: "/placeholder.svg?height=80&width=80"
        },
        candidates: [
            {
                id: 59,
                name: "Liton Mia",
                party: "independent",
                votes: 55670,
                percentage: 41.2,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 60,
                name: "Sahana Akter",
                party: "green",
                votes: 48920,
                percentage: 36.2,
                photo: "/placeholder.svg?height=60&width=60"
            },
            {
                id: 61,
                name: "Babul Hossain",
                party: "red",
                votes: 30510,
                percentage: 22.6,
                photo: "/placeholder.svg?height=60&width=60"
            }
        ],
        totalVoters: 178000,
        turnout: 75.9,
        margin: 6750
    }
];
}),
"[project]/components/dhaka-election-map.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DhakaElectionMap",
    ()=>DhakaElectionMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hexagon$2d$grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hexagon-grid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$candidate$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/candidate-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$legend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/legend.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$election$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/election-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function DhakaElectionMap() {
    const [selectedConstituency, setSelectedConstituency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPanelOpen, setIsPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTermsModalOpen, setIsTermsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form state for candidate submission modal
    const [candidateName, setCandidateName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [partyName, setPartyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [seatNumber, setSeatNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    //  heatlevel functionalities
    const heatLevels = [
        {
            name: "Low",
            color: "bg-orange-100"
        },
        {
            name: "Medium",
            color: "bg-orange-300"
        },
        {
            name: "High",
            color: "bg-orange-500"
        },
        {
            name: "Very High",
            color: "bg-orange-700"
        }
    ];
    const openModalFromMenu = ()=>{
        setIsMenuOpen(false);
        setIsModalOpen(true);
    };
    const handleSubmitCandidate = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");
        try {
            const response = await fetch("/api/submit-candidate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    candidateName,
                    partyName,
                    seatNumber
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Submission failed");
            }
            setIsModalOpen(false);
            setCandidateName("");
            setPartyName("");
            setSeatNumber("");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Candidate submitted successfully!", {
                description: `${candidateName} from ${partyName} - Seat ${seatNumber}`
            });
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : "An error occurred";
            setSubmitError(errorMsg);
            console.error("Submission error:", err);
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleHexagonClick = (constituency)=>{
        setSelectedConstituency(constituency);
        setIsPanelOpen(true);
    };
    const handleClosePanel = ()=>{
        setIsPanelOpen(false);
        setTimeout(()=>setSelectedConstituency(null), 300);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col min-h-screen overflow-hidden bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-3 top-20 z-50 md:left-12 md:top-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: openModalFromMenu,
                            className: "w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors first:rounded-t-lg last:rounded-b-lg",
                            children: "📝 Submit Candidate Info"
                        }, void 0, false, {
                            fileName: "[project]/components/dhaka-election-map.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dhaka-election-map.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dhaka-election-map.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dhaka-election-map.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-3 top-44 z-40 md:left-12 md:top-52",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-56 bg-white rounded-lg shadow-sm border border-gray-200 p-3 z-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 mb-2",
                            children: "Heat Index"
                        }, void 0, false, {
                            fileName: "[project]/components/dhaka-election-map.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: heatLevels.map((level, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-6 h-3 ${level.color} ${index === 0 ? "rounded-l" : ""} ${index === heatLevels.length - 1 ? "rounded-r" : ""}`,
                                    title: level.name
                                }, level.name, false, {
                                    fileName: "[project]/components/dhaka-election-map.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/dhaka-election-map.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dhaka-election-map.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dhaka-election-map.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "border-b border-gray-200 bg-white p-2 md:p-4 lg:p-6 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium uppercase tracking-wider text-orange-500",
                                            children: "Dhaka Election Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg md:text-2xl lg:text-3xl font-bold text-gray-900",
                                            children: "Dhaka Election Heat Map 2026"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dhaka-election-map.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 md:gap-4 flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$legend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsTermsModalOpen(true),
                                            className: "text-xs md:text-sm text-gray-600 hover:text-orange-600 ml-2 md:ml-4",
                                            children: "Terms & Conditions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dhaka-election-map.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dhaka-election-map.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dhaka-election-map.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center justify-center p-2 md:p-4 lg:p-8 min-h-0 overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full overflow-auto flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hexagon$2d$grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexagonGrid"], {
                                    constituencies: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$election$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constituencies"],
                                    onHexagonClick: handleHexagonClick,
                                    selectedId: selectedConstituency?.id
                                }, void 0, false, {
                                    fileName: "[project]/components/dhaka-election-map.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dhaka-election-map.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dhaka-election-map.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dhaka-election-map.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "border-t border-gray-200 bg-white p-2 md:p-4 lg:p-6 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center gap-3 md:gap-6 lg:gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg md:text-2xl lg:text-3xl font-bold text-gray-900",
                                            children: "20"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 uppercase tracking-wider",
                                            children: "Total Seats"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dhaka-election-map.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg md:text-2xl lg:text-3xl font-bold text-orange-500",
                                            children: "Dhaka"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 uppercase tracking-wider",
                                            children: "District"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dhaka-election-map.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg md:text-2xl lg:text-3xl font-bold text-gray-900",
                                            children: "2026"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 uppercase tracking-wider",
                                            children: "Election Year"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dhaka-election-map.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dhaka-election-map.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dhaka-election-map.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dhaka-election-map.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/40",
                        onClick: ()=>setIsModalOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/components/dhaka-election-map.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmitCandidate,
                        className: "relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 z-50",
                        "aria-label": "Submit Candidate Info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold",
                                        children: "Submit Candidate Info"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsModalOpen(false),
                                        className: "text-gray-500",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dhaka-election-map.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-md bg-red-50 border border-red-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-700",
                                            children: submitError
                                        }, void 0, false, {
                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                            lineNumber: 193,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700",
                                                children: "Candidate Name"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dhaka-election-map.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: candidateName,
                                                onChange: (e)=>setCandidateName(e.target.value),
                                                disabled: isSubmitting,
                                                required: true,
                                                className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:bg-gray-100"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dhaka-election-map.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700",
                                                children: "Party Name"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dhaka-election-map.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: partyName,
                                                onChange: (e)=>setPartyName(e.target.value),
                                                disabled: isSubmitting,
                                                required: true,
                                                className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:bg-gray-100"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dhaka-election-map.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700",
                                                children: "Election Seat"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dhaka-election-map.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: seatNumber,
                                                onChange: (e)=>setSeatNumber(Number(e.target.value)),
                                                disabled: isSubmitting,
                                                required: true,
                                                className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:bg-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select seat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this),
                                                    Array.from({
                                                        length: 20
                                                    }, (_, i)=>i + 1).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: n,
                                                            children: n
                                                        }, n, false, {
                                                            fileName: "[project]/components/dhaka-election-map.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dhaka-election-map.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dhaka-election-map.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex justify-end gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsModalOpen(false),
                                        disabled: isSubmitting,
                                        className: "px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        className: "px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-50",
                                        children: isSubmitting ? "Submitting..." : "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dhaka-election-map.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dhaka-election-map.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dhaka-election-map.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$candidate$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePanel"], {
                constituency: selectedConstituency,
                isOpen: isPanelOpen,
                onClose: handleClosePanel
            }, void 0, false, {
                fileName: "[project]/components/dhaka-election-map.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            isTermsModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/40",
                        onClick: ()=>setIsTermsModalOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/components/dhaka-election-map.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 z-50 max-h-96 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold",
                                        children: "Terms & Conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsTermsModalOpen(false),
                                        className: "text-gray-500 text-xl",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dhaka-election-map.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-semibold",
                                        children: "Hi there!!!"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700",
                                        children: "This platform is created purely for educational and entertainment purposes. The data displayed may be incorrect, unverified, or user-submitted. Do not use this for political involvement, campaigning, or decision-making."
                                    }, void 0, false, {
                                        fileName: "[project]/components/dhaka-election-map.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dhaka-election-map.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsTermsModalOpen(false),
                                    className: "px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700",
                                    children: "I Agree"
                                }, void 0, false, {
                                    fileName: "[project]/components/dhaka-election-map.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dhaka-election-map.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dhaka-election-map.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dhaka-election-map.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dhaka-election-map.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_5d139981._.js.map