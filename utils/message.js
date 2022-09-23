const config = require('../config.json');
module.exports = {
  giveaway:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "<a:antom_gws:1011654074942365716> **GIVEAWAY** <a:antom_gws:1011654074942365716>",
  giveawayEnded:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "<a:antom_gws:1011654074942365716> **GIVEAWAY ENDED** <a:antom_gws:1011654074942365716>",
  drawing:  `Ends: **{timestamp}**`,
  inviteToParticipate: `React with <a:Crisis_tada:1018353373424140389> to participate!`,
  winMessage: "<a:Crisis_tada:1018353373424140389>Congratulations, {winners}! You won **{this.prize}**!",
  embedFooter: "end at",
  noWinner: "Giveaway cancelled, no valid participations.",
  hostedBy: `Hosted by: {this.hostedBy}`,
  winners: "winners",
  endedAt: "Ended at"
}