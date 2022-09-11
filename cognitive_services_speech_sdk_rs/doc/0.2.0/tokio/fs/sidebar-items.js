window.SIDEBAR_ITEMS = {"fn":[["canonicalize","Returns the canonical, absolute form of a path with all intermediate components normalized and symbolic links resolved."],["copy","Copies the contents of one file to another. This function will also copy the permission bits of the original file to the destination file. This function will overwrite the contents of to."],["create_dir","Creates a new, empty directory at the provided path"],["create_dir_all","Recursively creates a directory and all of its parent components if they are missing."],["hard_link","Creates a new hard link on the filesystem."],["metadata","Given a path, queries the file system to get information about a file, directory, etc."],["read","Reads the entire contents of a file into a bytes vector."],["read_dir","Returns a stream over the entries within a directory."],["read_link","Reads a symbolic link, returning the file that the link points to."],["read_to_string","Creates a future which will open a file for reading and read the entire contents into a string and return said string."],["remove_dir","Removes an existing, empty directory."],["remove_dir_all","Removes a directory at this path, after removing all its contents. Use carefully!"],["remove_file","Removes a file from the filesystem."],["rename","Renames a file or directory to a new name, replacing the original file if `to` already exists."],["set_permissions","Changes the permissions found on a file or a directory."],["symlink","Creates a new symbolic link on the filesystem."],["symlink_metadata","Queries the file system metadata for a path."],["write","Creates a future that will open a file for writing and write the entire contents of `contents` to it."]],"struct":[["DirBuilder","A builder for creating directories in various manners."],["DirEntry","Entries returned by the `ReadDir` stream."],["File","A reference to an open file on the filesystem."],["OpenOptions","Options and flags which can be used to configure how a file is opened."],["ReadDir","Read the the entries in a directory."]]};