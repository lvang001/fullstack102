let photoSlideShow = {
    photoList: ['photoOne','photoTwo','photoThree'],

    currentPhotoIndex: 0,

    nextPhoto: function() {
        if (this.currentPhotoIndex < 3) {
            console.log(this.photoList[this.currentPhotoIndex])
            this.currentPhotoIndex++;
        }else{
            console('end of slide');
        }
    }, 
    prevPhoto: function() {
        if(this.currentPhotoIndex>0) {
            console.log(this.photoList[this.currentPhotoIndex])
            this.currentPhotoIndex--;
        }else{
            console.log('end of slide');
        }
    },
    getCurrentPhoto: function () {
        console.log(this.photoList[this.currentPhotoIndex])
    }
}

photoSlideShow.nextPhoto()
// console.log(getCurrentPhoto())
// console.log(photoSlideShow.currentPhotoIndex)
// console.log(photoSlideShow.nextPhoto)
console.log(photoSlideShow.getCurrentPhoto)
photoSlideShow.nextPhoto()
console.log(photoSlideShow.getCurrentPhoto)