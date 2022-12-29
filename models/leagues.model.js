const baseUrl = "https://www.fotmob.com/api";

async function getAll() {
  let matches =  await fotmob.getMatchesByDate("20201020")
  if (matches) {
    return matches
  }
}


function getLeagueById(id) {

}

module.exports = { getAll, getLeagueById}
