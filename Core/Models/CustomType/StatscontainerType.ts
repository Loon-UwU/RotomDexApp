import { BasePokeApiModel } from "../../Constant/BasePokeApiModel";

export type StatsConteinerType = {
    stats: [{
        base_stat: number;
        stat: BasePokeApiModel;
    }] | undefined
}