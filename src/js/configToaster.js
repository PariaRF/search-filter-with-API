export default function configToaster(type, message, title){
    toastr.options.progressBar = true;
    toastr.options.rtl = true;
    toastr.options.closeButton = true;
    toastr.options.positionClass = 'toast-top-left';
    toastr.options.preventDuplicates = true;
    toastr.options.showMethod = 'slideDown';
    toastr.options.closeDuration = 300;  
    
    switch (type) {
        case "error":
            return toastr.error(message, title);
        case "success":
            return toastr.success(message, title);
        default:
            return toastr.warning(message, title);
    }
}