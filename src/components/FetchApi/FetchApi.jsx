import axios from "axios";

export default {
    getStats: () => {
        return axios.get("/api/stats");
    }
}

// ~~~~~~~ these are the tages and what goes with them ~~~~~~~
// $("#tag").text(data.username)
// $("#kd").text(data.lifetime.all.properties.kdRatio.toFixed(2));
// $("#wl").text(data.lifetime.all.properties.winLossRatio.toFixed(2));
// $("#ttp").text(data.lifetime.all.properties.timePlayedTotal);
// $("#tgp").text(data.lifetime.all.properties.gamesPlayed);
// $("#acc").text(data.lifetime.all.properties.accuracy.toFixed(2));