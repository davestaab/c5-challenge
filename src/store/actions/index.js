export default {
  loadData({ commit }) {
    fetch('/allData.json')
      .then(response => response.json())
      .then(data => {
        commit('loadAllData', data);
      });
  }
};
