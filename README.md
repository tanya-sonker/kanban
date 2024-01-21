# kanban
creating a kanban app using angular and firebase by following Google's [codelab](https://developers.google.com/codelabs/building-a-web-app-with-angular-and-firebase)

## demo
<img width="1507" alt="Screenshot 2024-01-21 at 6 08 39 PM" src="https://github.com/tanya-sonker/kanban/assets/39142854/564b1a79-d928-4383-9e2f-bb1075fd9836">


## features
- can create/cancel a new task
- can drag and drop tasks across todo, in progress and done boards
- can edit/delete tasks (wip)
- store data in firestore (wip)

## improvements
- fixed syling issues related to angular material components faced by others following the same codelab. see [Issue #24](https://github.com/FirebaseExtended/codelab-kanban-fire/issues/24)
- added form validation to material form fields so empty tasks cannot be created
- minor bug when adding a new task: type in dialog's field > delete text > click cancel, empty task is added to board so modified cancel()
