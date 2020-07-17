class LocalStorageService {
    set(key: string, data: any): any {
        localStorage.setItem(key, JSON.stringify(data));
    }
    get(key: string): any {
        const data: string | null = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
    }
}

const storage = new LocalStorageService();

export default storage as LocalStorageService;
