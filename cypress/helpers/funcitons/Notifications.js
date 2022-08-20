export class Notifications {
    notification(obj, str) {
        obj.should('exist').and('contain', str);
    }
}