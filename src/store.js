const STORAGE_KEY = 'todos-vuejs'
export default {
	fetch() {
			console.log("fetch")
			return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
		},
		save(items) {
			console.log("save")
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
		}
}