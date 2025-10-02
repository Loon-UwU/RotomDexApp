export function getCycledIdnex(index: number | undefined): number {
    if (index === undefined) return 0;
    return (index % 20) + 1;
} 