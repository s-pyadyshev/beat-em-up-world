const apiClient = () => {
    const url = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                games: data
            });
        }
    )
};

export default apiClient;
