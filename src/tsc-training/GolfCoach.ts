import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    dailyWorkOut(): string {
        return "Practice 100 shots."
    }
    
}