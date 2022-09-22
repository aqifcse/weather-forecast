export class Rainfall {
    public step_start: string;
    public step_end: string;
    public val_min: number;
    public val_avg: number;
    public val_max: number;
    public val_avg_day: number;
    public val_avg_night: number;

    constructor(
        step_start: string, 
        step_end: string, 
        val_min: number, 
        val_avg: number, 
        val_max: number, 
        val_avg_day: number, 
        val_avg_night: number
    ) {
        this.step_start = step_start;
        this.step_end = step_end;
        this.val_min = val_min;
        this.val_avg = val_avg;
        this.val_max = val_max;
        this.val_avg_day = val_avg_day;
        this.val_avg_night = val_avg_night;

    }
}