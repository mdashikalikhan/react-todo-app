import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    dailyWorkOut(): string {
        return "Practice Spin bowling.";
    }
    
}