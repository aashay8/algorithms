let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// let nums1 = [1], m = 1, nums2 = [], n = 0;

let p1 = 0, p2 = 0;
while (p1 < m && p2 < n) {
    console.log({p1, p2})
    if (nums1[p1] <= nums2[p2]) {
        p1 += 1;
    } else if(nums1[p1] > nums2[p2]) {
        console.log({"nums[p1]": nums1[p1], 'nums2[p2': nums2[p2]})
        // Swap within arrays
        nums1[p1] = nums2[p2] + nums1[p1];
        nums2[p2] = nums1[p1] - nums2[p2];
        nums1[p1] = nums1[p1] - nums2[p2];
        console.log({nums1, nums2})

        p1 += 1;
        let i = 0;
        while (i < n) {
            if (nums2[i] > nums2[i+1]) {
                nums2[i] = nums2[i] + nums2[i+1];
                nums2[i+1] = nums2[i] - nums2[i+1];
                nums2[i] = nums2[i] - nums2[i+1];
                i += 1;
            } else { break;}
        }
    }
    console.log({nums1, nums2})
    console.log("\n")
}
console.log({nums1, nums2})
// for (let i = 0; i < n; i++) {
//     nums1[i+m] = nums2[i];
// }
nums1.splice(m,n, ...nums2)
console.log(nums1)